const translation = {
  title: 'Jurnale',
  description: 'Jurnalele înregistrează starea de funcționare a aplicației, inclusiv intrările utilizatorilor și răspunsurile AI.',
  dateTimeFormat: 'DD/MM/YYYY hh:mm A',
  table: {
    header: {
      updatedTime: 'Timp actualizare',
      time: 'Timp creare',
      endUser: 'Utilizator final sau cont',
      input: 'Intrare',
      output: 'Ieșire',
      summary: 'Titlu',
      messageCount: 'Număr de mesaje',
      userRate: 'Evaluare utilizator',
      adminRate: 'Evaluare op.',
      startTime: 'ORA DE ÎNCEPERE',
      status: 'STARE',
      runtime: 'TIMP DE RULARE',
      tokens: 'JETOANE',
      user: 'UTILIZATOR FINAL SAU CONT',
      version: 'VERSIUNE',
    },
    pagination: {
      previous: 'Anterior',
      next: 'Următor',
    },
    empty: {
      noChat: 'Încă nu există nicio conversație',
      noOutput: 'Fără ieșire',
      element: {
        title: 'Există cineva acolo?',
        content: 'Observați și annotați interacțiunile dintre utilizatorii finali și aplicațiile AI pentru a îmbunătăți în mod continuu acuratețea AI. Puteți încerca <shareLink>să partajați</shareLink> sau <testLink>să testați</testLink> aplicația web, apoi reveniți la această pagină.',
      },
    },
  },
  detail: {
    time: 'Oră',
    conversationId: 'ID conversație',
    promptTemplate: 'Șablon prompt',
    promptTemplateBeforeChat: 'Șablon prompt înainte de chat · Ca mesaj de sistem',
    annotationTip: 'Îmbunătățiri marcate de {{user}}',
    timeConsuming: '',
    second: 's',
    tokenCost: 'Jetoane cheltuite',
    loading: 'se încarcă',
    operation: {
      like: 'apreciere',
      dislike: 'dezaprobare',
      addAnnotation: 'Adăugați o îmbunătățire',
      editAnnotation: 'Editați o îmbunătățire',
      annotationPlaceholder: 'Introduceți răspunsul așteptat pe care doriți ca AI să îl furnizeze, care poate fi utilizat pentru fine-tuning-ul modelului și îmbunătățirea continuă a calității generării de text în viitor.',
    },
    variables: 'Variabile',
    uploadImages: 'Imagini încărcate',
    modelParams: 'Parametrii modelului',
  },
  filter: {
    period: {
      today: 'Astăzi',
      last7days: 'Ultimele 7 zile',
      last4weeks: 'Ultimele 4 săptămâni',
      last3months: 'Ultimele 3 luni',
      last12months: 'Ultimele 12 luni',
      monthToDate: 'Luna curentă',
      quarterToDate: 'Trimestrul curent',
      yearToDate: 'Anul curent',
      allTime: 'Tot timpul',
    },
    annotation: {
      all: 'Toate',
      annotated: 'Îmbunătățiri annotate ({{count}} elemente)',
      not_annotated: 'Fără annotări',
    },
    sortBy: 'Sortează după:',
    descending: 'descrescător',
    ascending: 'crescător',
  },
  workflowTitle: 'Jurnale de flux de lucru',
  workflowSubtitle: 'Jurnalul a înregistrat operațiunea Automate.',
  runDetail: {
    title: 'Jurnal de conversație',
    workflowTitle: 'Detalii jurnal',
    fileListDetail: 'Amănunt',
    fileListLabel: 'Detalii fișier',
  },
  promptLog: 'Jurnal prompt',
  agentLog: 'Jurnal agent',
  viewLog: 'Vizualizare jurnal',
  agentLogDetail: {
    agentMode: 'Mod agent',
    toolUsed: 'Instrument utilizat',
    iterations: 'Iterații',
    iteration: 'Iterație',
    finalProcessing: 'Procesare finală',
  },
}

export default translation
