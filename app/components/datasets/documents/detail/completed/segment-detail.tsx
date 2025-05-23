import React, { type FC, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  RiCloseLine,
  RiCollapseDiagonalLine,
  RiExpandDiagonalLine,
} from '@remixicon/react'
import { useDocumentContext } from '../index'
import ActionButtons from './common/action-buttons'
import ChunkContent from './common/chunk-content'
import Keywords from './common/keywords'
import RegenerationModal from './common/regeneration-modal'
import { SegmentIndexTag } from './common/segment-index-tag'
import Dot from './common/dot'
import { useSegmentListContext } from './index'
import { ChunkingMode, type SegmentDetailModel } from '@/models/datasets'
import { useEventEmitterContextContext } from '@/context/event-emitter'
import { formatNumber } from '@/utils/format'
import classNames from '@/utils/classnames'
import Divider from '@/app/components/base/divider'

type ISegmentDetailProps = {
  segInfo?: Partial<SegmentDetailModel> & { id: string }
  onUpdate: (segmentId: string, q: string, a: string, k: string[], needRegenerate?: boolean) => void
  onCancel: () => void
  isEditMode?: boolean
  docForm: ChunkingMode
}

/**
 * Show all the contents of the segment
 */
const SegmentDetail: FC<ISegmentDetailProps> = ({
  segInfo,
  onUpdate,
  onCancel,
  isEditMode,
  docForm,
}) => {
  const { t } = useTranslation()
  const [question, setQuestion] = useState(isEditMode ? segInfo?.content || '' : segInfo?.sign_content || '')
  const [answer, setAnswer] = useState(segInfo?.answer || '')
  const [keywords, setKeywords] = useState<string[]>(segInfo?.keywords || [])
  const { eventEmitter } = useEventEmitterContextContext()
  const [loading, setLoading] = useState(false)
  const [showRegenerationModal, setShowRegenerationModal] = useState(false)
  const fullScreen = useSegmentListContext(s => s.fullScreen)
  const toggleFullScreen = useSegmentListContext(s => s.toggleFullScreen)
  const mode = useDocumentContext(s => s.mode)
  const parentMode = useDocumentContext(s => s.parentMode)

  eventEmitter?.useSubscription((v) => {
    if (v === 'update-segment')
      setLoading(true)
    if (v === 'update-segment-done')
      setLoading(false)
  })

  const handleCancel = () => {
    onCancel()
  }

  const handleSave = () => {
    onUpdate(segInfo?.id || '', question, answer, keywords)
  }

  const handleRegeneration = () => {
    setShowRegenerationModal(true)
  }

  const onCancelRegeneration = () => {
    setShowRegenerationModal(false)
  }

  const onConfirmRegeneration = () => {
    onUpdate(segInfo?.id || '', question, answer, keywords, true)
  }

  const isParentChildMode = useMemo(() => {
    return mode === 'hierarchical'
  }, [mode])

  const isFullDocMode = useMemo(() => {
    return mode === 'hierarchical' && parentMode === 'full-doc'
  }, [mode, parentMode])

  const titleText = useMemo(() => {
    return isEditMode ? t('datasetDocuments.segment.editChunk') : t('datasetDocuments.segment.chunkDetail')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode])

  const isQAModel = useMemo(() => {
    return docForm === ChunkingMode.qa
  }, [docForm])

  const wordCountText = useMemo(() => {
    const contentLength = isQAModel ? (question.length + answer.length) : question.length
    const total = formatNumber(isEditMode ? contentLength : segInfo!.word_count as number)
    const count = isEditMode ? contentLength : segInfo!.word_count as number
    return `${total} ${t('datasetDocuments.segment.characters', { count })}`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode, question.length, answer.length, segInfo?.word_count, isQAModel])

  const labelPrefix = useMemo(() => {
    return isParentChildMode ? t('datasetDocuments.segment.parentChunk') : t('datasetDocuments.segment.chunk')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isParentChildMode])

  return (
    <div className={'flex h-full flex-col'}>
      <div className={classNames('flex items-center justify-between', fullScreen ? 'py-3 pr-4 pl-6 border border-divider-subtle' : 'pt-3 pr-3 pl-4')}>
        <div className='flex flex-col'>
          <div className='system-xl-semibold text-text-primary'>{titleText}</div>
          <div className='flex items-center gap-x-2'>
            <SegmentIndexTag positionId={segInfo?.position || ''} label={isFullDocMode ? labelPrefix : ''} labelPrefix={labelPrefix} />
            <Dot />
            <span className='system-xs-medium text-text-tertiary'>{wordCountText}</span>
          </div>
        </div>
        <div className='flex items-center'>
          {isEditMode && fullScreen && (
            <>
              <ActionButtons
                handleCancel={handleCancel}
                handleRegeneration={handleRegeneration}
                handleSave={handleSave}
                loading={loading}
              />
              <Divider type='vertical' className='ml-4 mr-2 h-3.5 bg-divider-regular' />
            </>
          )}
          <div className='mr-1 flex h-8 w-8 cursor-pointer items-center justify-center p-1.5' onClick={toggleFullScreen}>
            {fullScreen ? <RiCollapseDiagonalLine className='h-4 w-4 text-text-tertiary' /> : <RiExpandDiagonalLine className='h-4 w-4 text-text-tertiary' />}
          </div>
          <div className='flex h-8 w-8 cursor-pointer items-center justify-center p-1.5' onClick={onCancel}>
            <RiCloseLine className='h-4 w-4 text-text-tertiary' />
          </div>
        </div>
      </div>
      <div className={classNames(
        'flex grow',
        fullScreen ? 'w-full flex-row justify-center px-6 pt-6 gap-x-8' : 'flex-col gap-y-1 py-3 px-4',
        !isEditMode && 'pb-0 overflow-hidden',
      )}>
        <div className={classNames(isEditMode ? 'break-all whitespace-pre-line overflow-hidden' : 'overflow-y-auto', fullScreen ? 'w-1/2' : 'grow')}>
          <ChunkContent
            docForm={docForm}
            question={question}
            answer={answer}
            onQuestionChange={question => setQuestion(question)}
            onAnswerChange={answer => setAnswer(answer)}
            isEditMode={isEditMode}
          />
        </div>
        {mode === 'custom' && <Keywords
          className={fullScreen ? 'w-1/5' : ''}
          actionType={isEditMode ? 'edit' : 'view'}
          segInfo={segInfo}
          keywords={keywords}
          isEditMode={isEditMode}
          onKeywordsChange={keywords => setKeywords(keywords)}
        />}
      </div>
      {isEditMode && !fullScreen && (
        <div className='flex items-center justify-end border-t-[1px] border-t-divider-subtle p-4 pt-3'>
          <ActionButtons
            handleCancel={handleCancel}
            handleRegeneration={handleRegeneration}
            handleSave={handleSave}
            loading={loading}
          />
        </div>
      )}
      {
        showRegenerationModal && (
          <RegenerationModal
            isShow={showRegenerationModal}
            onConfirm={onConfirmRegeneration}
            onCancel={onCancelRegeneration}
            onClose={onCancelRegeneration}
          />
        )
      }
    </div>
  )
}

export default React.memo(SegmentDetail)
