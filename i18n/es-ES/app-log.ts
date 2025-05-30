const translation = {
  title: 'Registros',
  description: 'Los registros registran el estado de ejecución de la aplicación, incluyendo las entradas de usuario y las respuestas de la IA.',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      updatedTime: 'Hora actualizada',
      time: 'Hora creada',
      endUser: 'Usuario Final o Cuenta',
      input: 'Entrada',
      output: 'Salida',
      summary: 'Título',
      messageCount: 'Cantidad de Mensajes',
      userRate: 'Tasa de Usuario',
      adminRate: 'Tasa de Op.',
      startTime: 'HORA DE INICIO',
      status: 'ESTADO',
      runtime: 'TIEMPO DE EJECUCIÓN',
      tokens: 'TOKENS',
      user: 'USUARIO FINAL O CUENTA',
      version: 'VERSIÓN',
    },
    pagination: {
      previous: 'Anterior',
      next: 'Siguiente',
    },
    empty: {
      noChat: 'Aún no hay conversación',
      noOutput: 'Sin salida',
      element: {
        title: '¿Hay alguien ahí?',
        content: 'Observa y anota las interacciones entre los usuarios finales y las aplicaciones de IA aquí para mejorar continuamente la precisión de la IA. Puedes probar <shareLink>compartiendo</shareLink> o <testLink>probando</testLink> la aplicación web tú mismo, y luego regresar a esta página.',
      },
    },
  },
  detail: {
    time: 'Tiempo',
    conversationId: 'ID de Conversación',
    promptTemplate: 'Plantilla de Indicación',
    promptTemplateBeforeChat: 'Plantilla de Indicación Antes de la Conversación · Como Mensaje del Sistema',
    annotationTip: 'Mejoras Marcadas por {{user}}',
    timeConsuming: '',
    second: 's',
    tokenCost: 'Tokens gastados',
    loading: 'cargando',
    operation: {
      like: 'me gusta',
      dislike: 'no me gusta',
      addAnnotation: 'Agregar Mejora',
      editAnnotation: 'Editar Mejora',
      annotationPlaceholder: 'Ingresa la respuesta esperada que deseas que la IA responda, lo cual se puede utilizar para el ajuste del modelo y la mejora continua de la calidad de generación de texto en el futuro.',
    },
    variables: 'Variables',
    uploadImages: 'Imágenes Cargadas',
    modelParams: 'Parámetros del modelo',
  },
  filter: {
    period: {
      today: 'Hoy',
      last7days: 'Últimos 7 Días',
      last4weeks: 'Últimas 4 semanas',
      last3months: 'Últimos 3 meses',
      last12months: 'Últimos 12 meses',
      monthToDate: 'Mes hasta la fecha',
      quarterToDate: 'Trimestre hasta la fecha',
      yearToDate: 'Año hasta la fecha',
      allTime: 'Todo el tiempo',
    },
    annotation: {
      all: 'Todos',
      annotated: 'Mejoras Anotadas ({{count}} elementos)',
      not_annotated: 'No Anotadas',
    },
    sortBy: 'Ordenar por:',
    descending: 'descendente',
    ascending: 'ascendente',
  },
  workflowTitle: 'Registros de Flujo de Trabajo',
  workflowSubtitle: 'El registro registró la operación de Automate.',
  runDetail: {
    title: 'Registro de Conversación',
    workflowTitle: 'Detalle del Registro',
    fileListLabel: 'Detalles del archivo',
    fileListDetail: 'Detalle',
  },
  promptLog: 'Registro de Indicación',
  agentLog: 'Registro de Agente',
  viewLog: 'Ver Registro',
  agentLogDetail: {
    agentMode: 'Modo de Agente',
    toolUsed: 'Herramienta Utilizada',
    iterations: 'Iteraciones',
    iteration: 'Iteración',
    finalProcessing: 'Procesamiento Final',
  },
}

export default translation
