'use client'
import type { FC } from 'react'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { SupportUploadFileTypes } from '../../../types'
import cn from '@/utils/classnames'
import { FILE_EXTS } from '@/app/components/base/prompt-editor/constants'
import TagInput from '@/app/components/base/tag-input'
import Checkbox from '@/app/components/base/checkbox'
import { FileTypeIcon } from '@/app/components/base/file-uploader'

type Props = {
  type: SupportUploadFileTypes.image | SupportUploadFileTypes.document | SupportUploadFileTypes.audio | SupportUploadFileTypes.video | SupportUploadFileTypes.custom
  selected: boolean
  onToggle: (type: SupportUploadFileTypes) => void
  onCustomFileTypesChange?: (customFileTypes: string[]) => void
  customFileTypes?: string[]
}

const FileTypeItem: FC<Props> = ({
  type,
  selected,
  onToggle,
  customFileTypes = [],
  onCustomFileTypesChange = () => { },
}) => {
  const { t } = useTranslation()

  const handleOnSelect = useCallback(() => {
    onToggle(type)
  }, [onToggle, type])

  const isCustomSelected = type === SupportUploadFileTypes.custom && selected

  return (
    <div
      className={cn(
        'cursor-pointer select-none rounded-lg border border-components-option-card-option-border bg-components-option-card-option-bg',
        !isCustomSelected && 'px-3 py-2',
        selected && 'border-[1.5px] border-components-option-card-option-selected-border bg-components-option-card-option-selected-bg',
        !selected && 'hover:border-components-option-card-option-border-hover hover:bg-components-option-card-option-bg-hover',
      )}
      onClick={handleOnSelect}
    >
      {isCustomSelected
        ? (
          <div>
            <div className='flex items-center border-b border-divider-subtle p-3 pb-2'>
              <FileTypeIcon className='shrink-0' type={type} size='md' />
              <div className='system-sm-medium mx-2 grow text-text-primary'>{t(`appDebug.variableConfig.file.${type}.name`)}</div>
              <Checkbox className='shrink-0' checked={selected} />
            </div>
            <div className='p-3' onClick={e => e.stopPropagation()}>
              <TagInput
                items={customFileTypes}
                onChange={onCustomFileTypesChange}
                placeholder={t('appDebug.variableConfig.file.custom.createPlaceholder')!}
              />
            </div>
          </div>
        )
        : (
          <div className='flex items-center'>
            <FileTypeIcon className='shrink-0' type={type} size='md' />
            <div className='mx-2 grow'>
              <div className='system-sm-medium text-text-primary'>{t(`appDebug.variableConfig.file.${type}.name`)}</div>
              <div className='system-2xs-regular-uppercase mt-1 text-text-tertiary'>{type !== SupportUploadFileTypes.custom ? FILE_EXTS[type].join(', ') : t('appDebug.variableConfig.file.custom.description')}</div>
            </div>
            <Checkbox className='shrink-0' checked={selected} />
          </div>
        )}

    </div>
  )
}

export default React.memo(FileTypeItem)
