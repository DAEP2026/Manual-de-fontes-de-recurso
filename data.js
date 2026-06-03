/* ============================================================
   data.js — Dados do Manual de Fontes/Destinações de Recursos
   Município de Niterói · SEPLAG/SSO · Revisão junho/2026
   Atualizado até Portaria STN/MF nº 636/2026
   Combinações FR × Detalhamento × CO conforme ANEXO III do Manual
   ============================================================ */

const CO_COLORS = {
  0:    'gray',
  1001: 'blue', 1002: 'blue', 1010: 'coral',
  1070: 'teal', 1071: 'teal', 1072: 'teal',
  1110: 'amber', 1120: 'amber', 1130: 'amber', 1140: 'amber', 1190: 'amber',
  1111: 'green', 1121: 'green', 1122: 'green', 1123: 'green', 1124: 'green',
  1125: 'green', 1131: 'green', 1132: 'green', 1141: 'green', 1151: 'green',
  2111: 'green', 2121: 'green', 2122: 'green', 2123: 'green', 2124: 'green',
  2125: 'green', 2131: 'green', 2132: 'green', 2141: 'green', 2151: 'green',
  2211: 'green',
  2301: 'amber', 2302: 'amber', 2303: 'amber', 2304: 'amber', 2305: 'amber',
  2306: 'amber', 2307: 'amber', 2308: 'amber', 2309: 'amber',
  3101: 'coral', 3110: 'amber', 3111: 'coral', 3120: 'amber', 3121: 'coral',
  3130: 'amber', 3140: 'amber', 3201: 'coral', 3202: 'coral',
  3210: 'amber', 3211: 'coral', 3220: 'amber', 3221: 'coral',
  5001: 'purple',
};

const CO_NAMES = {
  0:    'Não se aplica',
  1001: 'MDE — manutenção e desenvolvimento do ensino',
  1002: 'ASPS — ações e serviços públicos de saúde',
  1010: 'Despesas com postergação de dívida — calamidade pública',
  1070: 'FUNDEB — remuneração dos profissionais da educação básica',
  1071: 'FUNDEB — matrículas em tempo integral (ETI)',
  1072: 'FUNDEB — remuneração + ETI (cumprimento simultâneo)',
  1110: 'Emendas individuais — orçamento próprio do ente',
  1120: 'Emendas de bancada — orçamento próprio do ente',
  1130: 'Emendas de comissão — orçamento próprio do ente',
  1140: 'Emendas de relator — orçamento próprio do ente',
  1190: 'Outras emendas — orçamento próprio do ente',
  1111: 'Benef. previdenciários — Poder Executivo — Capitalização (Plano Previdenciário)',
  1121: 'Benef. previdenciários — Poder Legislativo — Capitalização (Plano Previdenciário)',
  1122: 'Benef. previdenciários — Tribunal de Contas — Capitalização',
  1123: 'Benef. previdenciários — Tribunal de Contas dos Municípios — Capitalização',
  1124: 'Benef. previdenciários — MP de Contas — Capitalização',
  1125: 'Benef. previdenciários — MP de Contas dos Municípios — Capitalização',
  1131: 'Benef. previdenciários — Tribunal de Justiça — Capitalização',
  1132: 'Benef. previdenciários — Tribunal de Justiça Militar — Capitalização',
  1141: 'Benef. previdenciários — Ministério Público — Capitalização',
  1151: 'Benef. previdenciários — Defensoria Pública — Capitalização',
  2111: 'Benef. previdenciários — Poder Executivo — Repartição (Plano Financeiro)',
  2121: 'Benef. previdenciários — Poder Legislativo — Repartição (Plano Financeiro)',
  2122: 'Benef. previdenciários — Tribunal de Contas — Repartição',
  2123: 'Benef. previdenciários — Tribunal de Contas dos Municípios — Repartição',
  2124: 'Benef. previdenciários — MP de Contas — Repartição',
  2125: 'Benef. previdenciários — MP de Contas dos Municípios — Repartição',
  2131: 'Benef. previdenciários — Tribunal de Justiça — Repartição',
  2132: 'Benef. previdenciários — Tribunal de Justiça Militar — Repartição',
  2141: 'Benef. previdenciários — Ministério Público — Repartição',
  2151: 'Benef. previdenciários — Defensoria Pública — Repartição',
  2211: 'Benefícios previdenciários — Militares SPSM',
  2301: 'Propag — educação profissional técnica de nível médio',
  2302: 'Propag — infraestrutura para universalização do ensino infantil',
  2303: 'Propag — infraestrutura para educação em tempo integral',
  2304: 'Propag — investimentos em adaptação às mudanças climáticas',
  2305: 'Propag — investimentos em universidades estaduais',
  2306: 'Propag — investimentos em saneamento',
  2307: 'Propag — investimentos em habitação',
  2308: 'Propag — investimentos em transportes',
  2309: 'Propag — investimentos em segurança pública',
  3101: 'Transferências União — enfrentamento à calamidade pública',
  3110: 'Emendas parlamentares individuais — União',
  3111: 'Emendas individuais União — calamidade pública',
  3120: 'Emendas parlamentares de bancada — União',
  3121: 'Emendas bancada União — calamidade pública',
  3130: 'Emendas parlamentares de comissão — União',
  3140: 'Emendas parlamentares de relator — União',
  3201: 'Transferências Estado — enfrentamento à calamidade pública',
  3202: 'Transferências municípios/entidades — calamidade pública',
  3210: 'Emendas parlamentares individuais — Estado',
  3211: 'Emendas individuais Estado — calamidade pública',
  3220: 'Emendas parlamentares de bancada — Estado',
  3221: 'Emendas bancada Estado — calamidade pública',
  5001: 'Receitas de compensação de precatórios com dívida ativa — art. 105 ADCT/CF-88',
};

const CO_SPECS = {
  1001: 'Identifica as despesas com MDE para cumprimento do limite constitucional (art. 70 e 71 da Lei 9.394/1996 e art. 212 da CF). Deve ser associado às fontes 500 e 502.',
  1002: 'Identifica as despesas com ASPS para cumprimento do limite constitucional (art. 2º e 3º da LC 141/2012). Deve ser associado às fontes 500 e 502.',
  1010: 'Identifica as despesas custeadas com recursos da postergação do pagamento da dívida com a União em razão de calamidade pública (LC 206/2024).',
  1070: 'Verifica a aplicação mínima de 70% do FUNDEB em remuneração dos profissionais da educação básica em efetivo exercício (art. 212-A, XI da CF). Associado às fontes 540, 541 e 542.',
  1071: 'Verifica a aplicação mínima do FUNDEB destinada à criação de matrículas em tempo integral na educação básica (art. 212-A, XV da CF). Associado à fonte 540.',
  1072: 'Verifica simultaneamente os percentuais do art. 212-A, incisos XI e XV da CF. Associado à fonte 540.',
  1111: 'Identifica a qual Poder ou Órgão se refere a despesa quando executada no PO RPPS — Plano Previdenciário (Capitalização). Permite geração automática do Demonstrativo de Despesa com Pessoal.',
  2111: 'Identifica a qual Poder ou Órgão se refere a despesa quando executada no PO RPPS — Plano Financeiro (Repartição). Permite geração automática do Demonstrativo de Despesa com Pessoal.',
  2211: 'Identifica as despesas com inatividade e pensões militares do SPSM (Lei 13.954/2019).',
  3101: 'Identifica as transferências e a aplicação dos recursos transferidos pela União aos municípios em decorrência de calamidade pública e emergência.',
  3110: 'Identifica as transferências da União decorrentes de emendas parlamentares individuais impositivas (art. 166, §9º da CF, EC 86/2015). Associado às fontes que recebem essas transferências.',
  3120: 'Identifica as transferências da União decorrentes de emendas parlamentares de bancada (art. 166, §11 da CF, EC 100/2019).',
  3130: 'Identifica as transferências da União decorrentes de emendas parlamentares de comissão (art. 44 da Resolução nº 1/2006-CN).',
  3140: 'Identifica as transferências da União decorrentes de emendas parlamentares de relator (art. 53 da Resolução nº 1/2006-CN).',
  3210: 'Identifica as transferências dos Estados decorrentes de emendas parlamentares individuais, nos termos das Constituições Estaduais. Utilização pelos municípios.',
  3220: 'Identifica as transferências dos Estados decorrentes de emendas parlamentares de bancada. Utilização pelos municípios.',
  3111: 'Identifica transferências da União por emendas individuais em situações de calamidade pública ou emergência.',
  3121: 'Identifica transferências da União por emendas de bancada em situações de calamidade pública ou emergência.',
  3211: 'Identifica transferências dos Estados por emendas individuais em situações de calamidade pública ou emergência.',
  3221: 'Identifica transferências dos Estados por emendas de bancada em situações de calamidade pública ou emergência.',
  5001: 'Identifica as receitas de compensação de débitos tributários com precatórios (art. 105 do ADCT/CF-88). Utilizado apenas na fase de arrecadação da receita. As vinculações não se aplicam a essas receitas (art. 105, §1º).',
  1110: 'Identifica as despesas incluídas no orçamento por indicação individual dos parlamentares (nas fases de dotação e execução).',
  1120: 'Identifica as despesas incluídas por indicação coletiva de bancada ou bloco de parlamentares.',
  1130: 'Identifica as despesas incluídas por indicação coletiva de comissões técnicas.',
  1140: 'Identifica as despesas incluídas por indicação individual de relatores dos projetos.',
  1190: 'Identifica as despesas incluídas por outros tipos de emendas não mencionados anteriormente.',
};

/* ══════════════════════════════════════════════════════════════
   FONTES — estrutura revisada conforme ANEXO III do Manual
   Campo "dets": todos os detalhamentos admitidos pela fonte
   Campo "cos":  todos os COs admitidos para a fonte
   ══════════════════════════════════════════════════════════════ */
const FONTES = [
  /* ── RECURSOS LIVRES ── */
  {
    block: 'livres', code: '500', badge: 'blue',
    name: 'Recursos não vinculados de impostos',
    spec: 'Recursos de impostos e transferências de impostos de livre aplicação. Em atendimento ao art. 4º, X da LC 141/2012, para identificação do percentual mínimo em ASPS, deve ser associada ao CO 1002. A mesma lógica se aplica ao limite de MDE (CO 1001).',
    /* Anexo III: dets 00, 14, 50, 99 | COs: 0, 1001, 1002, 2111, 2121 */
    dets: ['00', '14', '50', '99'],
    cos: [0, 1001, 1002, 2111, 2121],
  },
  {
    block: 'livres', code: '501', badge: 'blue',
    name: 'Outros recursos não vinculados',
    spec: 'Outros recursos não vinculados que não se enquadram como impostos ou transferências de impostos. Inclui recursos de participação especial (det. 02), outros não vinculados (det. 03), taxa sem destinação específica (det. 04) e receitas de compensação de precatórios com dívida ativa (CO 5001).',
    /* Anexo III: dets 00, 02, 03, 48, 49, 99 | COs: 0, 5001 */
    dets: ['00', '02', '03', '04', '48', '49', '99'],
    cos: [0, 5001],
  },
  {
    block: 'livres', code: '502', badge: 'blue',
    name: 'Recursos não vinculados da compensação de impostos',
    spec: 'Controle dos recursos não vinculados provenientes da compensação de impostos. Deve ser associada ao CO 1001 (MDE) e CO 1002 (ASPS) para verificação dos limites mínimos constitucionais.',
    /* Anexo III: dets 14, 50, 99 | COs: 0, 1001, 1002 */
    dets: ['14', '50', '99'],
    cos: [0, 1001, 1002],
  },
  {
    block: 'livres', code: '503', badge: 'blue',
    name: 'Apoio financeiro da União — calamidade pública',
    spec: 'Controle dos recursos transferidos pela União a título de apoio financeiro para enfrentar situações de calamidade pública e suas consequências sociais e econômicas (ex: MP nº 1.222, de 21 de maio de 2024).',
    /* Sem combinações específicas no Anexo III — CO 0 padrão */
    dets: ['00'],
    cos: [0],
  },

  /* ── EDUCAÇÃO ── */
  {
    block: 'educacao', code: '540', badge: 'green',
    name: 'FUNDEB — impostos e transferências de impostos',
    spec: 'Controle dos recursos recebidos do FUNDEB referente à repartição dentro de cada Estado (art. 212-A, I, II e III da CF). Na despesa, associar ao CO 1070 (remuneração), 1071 (ETI) ou 1072 (simultâneo), conforme o caso.',
    /* Anexo III: dets 50, 99 | COs: 0, 1070, 1071, 1072 */
    dets: ['50', '99'],
    cos: [0, 1070, 1071, 1072],
  },
  {
    block: 'educacao', code: '541', badge: 'green',
    name: 'FUNDEB — complementação União (VAAF)',
    spec: 'Controle dos recursos de complementação da União ao FUNDEB — Valor Anual Aluno por Fundo (VAAF), com base na alínea a do inciso V do art. 212-A da CF. Na despesa, associar ao CO 1070.',
    /* Anexo III: dets 50, 99 | COs: 0, 1070, 1071, 1072 */
    dets: ['50', '99'],
    cos: [0, 1070, 1071, 1072],
  },
  {
    block: 'educacao', code: '542', badge: 'green',
    name: 'FUNDEB — complementação União (VAAT)',
    spec: 'Controle dos recursos de complementação da União ao FUNDEB — Valor Anual Total por Aluno (VAAT), com base na alínea b do inciso V do art. 212-A da CF. Na despesa, associar ao CO 1070.',
    /* Anexo III: dets 50, 99 | COs: 0, 1070 */
    dets: ['50', '99'],
    cos: [0, 1070],
  },
  {
    block: 'educacao', code: '543', badge: 'green',
    name: 'FUNDEB — complementação União (VAAR)',
    spec: 'Controle dos recursos de complementação da União ao FUNDEB — Valor Anual por Aluno de Resultado (VAAR), com base na alínea c, inciso V do art. 212-A da CF.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '544', badge: 'green',
    name: 'Precatórios do FUNDEF',
    spec: 'Controle dos recursos decorrentes do recebimento de precatórios derivados de ações judiciais associadas à complementação devida pela União ao FUNDEF.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '545', badge: 'green',
    name: 'Precatórios do FUNDEB (2007–2020)',
    spec: 'Controle dos recursos decorrentes de precatórios relativos aos repasses ao FUNDEB 2007–2020, para atendimento ao art. 47-A da Lei nº 14.113/2020.',
    /* Anexo III: dets 00, 50, 99 | CO: 0 */
    dets: ['00', '50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '546', badge: 'green',
    name: 'FUNDEB — complementação União (ETI)',
    spec: 'Controle dos recursos de complementação da União ao FUNDEB destinados ao fomento à criação de matrículas em tempo integral na educação básica pública (art. 212-A, XIV da CF).',
    /* Anexo III: dets 00, 50, 99 | CO: 0 */
    dets: ['00', '50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '550', badge: 'green',
    name: 'Salário-educação',
    spec: 'Controle dos recursos originários de transferências do FNDE referentes ao salário-educação.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '551', badge: 'green',
    name: 'FNDE — PDDE (Programa Dinheiro Direto na Escola)',
    spec: 'Controle dos recursos do FNDE destinados ao Programa Dinheiro Direto na Escola.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '552', badge: 'green',
    name: 'FNDE — PNAE (alimentação escolar)',
    spec: 'Controle dos recursos do FNDE destinados ao Programa Nacional de Alimentação Escolar.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '553', badge: 'green',
    name: 'FNDE — PNATE (transporte escolar)',
    spec: 'Controle dos recursos do FNDE destinados ao Programa Nacional de Apoio ao Transporte Escolar.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '569', badge: 'green',
    name: 'Outras transferências do FNDE',
    spec: 'Controle dos demais recursos originários de transferências do FNDE não enquadrados nas fontes 550 a 553.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '570', badge: 'green',
    name: 'Convênios e repasses federais — Educação',
    spec: 'Controle dos recursos de convênios, contratos de repasse e instrumentos congêneres celebrados com a União, cuja destinação seja vinculada a programas da educação.',
    /* Anexo III: dets 50, 99 | COs: 0, 3110, 3120 */
    dets: ['50', '99'],
    cos: [0, 3110, 3120],
  },
  {
    block: 'educacao', code: '571', badge: 'green',
    name: 'Convênios estaduais — Educação',
    spec: 'Controle dos recursos de convênios e instrumentos congêneres celebrados com os Estados, vinculados a programas da educação.',
    /* Anexo III: dets 50, 99 | COs: 0, 3210, 3220 */
    dets: ['50', '99'],
    cos: [0, 3210, 3220],
  },
  {
    block: 'educacao', code: '572', badge: 'green',
    name: 'Convênios municipais — Educação',
    spec: 'Controle dos recursos de convênios com outros municípios, vinculados a programas da educação.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '573', badge: 'green',
    name: 'Royalties e participação especial — Educação (Lei 12.858/2013)',
    spec: 'Controle dos recursos de royalties e participação especial vinculados à Educação com base no art. 2º da Lei nº 12.858/2013.',
    /* Anexo III: dets 00, 49, 99 | CO: 0 */
    dets: ['00', '49', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '574', badge: 'green',
    name: 'Operações de crédito — Educação',
    spec: 'Controle dos recursos originários de operações de crédito cuja destinação seja vinculada a programas da educação.',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'educacao', code: '575', badge: 'green',
    name: 'Convênios de entidades privadas/internacionais — Educação',
    spec: 'Controle dos recursos de transferências de entidades privadas, estrangeiras ou multigovernamentais em virtude de convênios e instrumentos congêneres, vinculados à educação.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '576', badge: 'green',
    name: 'Transferências dos Estados — Educação (sem convênio)',
    spec: 'Controle dos recursos transferidos pelos Estados para programas de educação, que não decorram de convênios, contratos de repasse ou termos de parceria.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'educacao', code: '599', badge: 'green',
    name: 'Outros recursos vinculados à Educação',
    spec: 'Controle dos demais recursos vinculados à Educação não enquadrados nas fontes 540 a 576.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },

  /* ── SAÚDE ── */
  {
    block: 'saude', code: '600', badge: 'teal',
    name: 'SUS — Bloco de manutenção das ações e serviços públicos de saúde',
    spec: 'Controle dos recursos do Fundo Nacional de Saúde referentes ao SUS — Bloco de Manutenção das Ações e Serviços Públicos de Saúde.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '601', badge: 'teal',
    name: 'SUS — Bloco de estruturação da rede de serviços públicos de saúde',
    spec: 'Controle dos recursos do Fundo Nacional de Saúde relacionados ao Bloco de Estruturação da Rede de Serviços Públicos de Saúde.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '602', badge: 'teal',
    name: 'SUS — Bloco manutenção — COVID-19 (ação 21C0)',
    spec: 'Controle dos recursos do FNS destinados ao enfrentamento da COVID-19 no bojo da ação 21C0 do orçamento da União — Bloco Manutenção.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '603', badge: 'teal',
    name: 'SUS — Bloco estruturação — COVID-19 (ação 21C0)',
    spec: 'Controle dos recursos do FNS destinados ao enfrentamento da COVID-19 no bojo da ação 21C0 — Bloco Estruturação da Rede.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '604', badge: 'teal',
    name: 'Agentes comunitários de saúde e agentes de combate às endemias',
    spec: 'Controle dos recursos do Governo Federal referentes ao vencimento dos ACS e ACE, nos termos do art. 198, §7º da CF.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '605', badge: 'teal',
    name: 'Piso salarial da enfermagem — complementação da União',
    spec: 'Controle dos recursos transferidos pela União para complementação dos pisos salariais do enfermeiro, técnico e auxiliar de enfermagem e parteira (art. 198, §§12 a 15 da CF).',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '621', badge: 'teal',
    name: 'SUS — fundo a fundo estadual',
    spec: 'Controle dos recursos originários de transferências do Fundo Estadual de Saúde referentes ao SUS.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '622', badge: 'teal',
    name: 'SUS — fundo a fundo municipal',
    spec: 'Controle dos recursos originários de transferências dos Fundos de Saúde de outros municípios referentes ao SUS.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '631', badge: 'teal',
    name: 'Convênios federais — Saúde',
    spec: 'Controle dos recursos de convênios e instrumentos congêneres com a União, vinculados a programas da saúde.',
    /* Anexo III: dets 50, 99 | COs: 0, 3110, 3120 */
    dets: ['50', '99'],
    cos: [0, 3110, 3120],
  },
  {
    block: 'saude', code: '632', badge: 'teal',
    name: 'Convênios estaduais — Saúde',
    spec: 'Controle dos recursos de convênios e instrumentos congêneres com os Estados, vinculados à saúde.',
    /* Anexo III: dets 50, 99 | COs: 0, 3210, 3220 */
    dets: ['50', '99'],
    cos: [0, 3210, 3220],
  },
  {
    block: 'saude', code: '633', badge: 'teal',
    name: 'Convênios municipais — Saúde',
    spec: 'Controle dos recursos de convênios com outros Municípios, vinculados à saúde.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '634', badge: 'teal',
    name: 'Operações de crédito — Saúde',
    spec: 'Controle dos recursos de operações de crédito cuja destinação seja vinculada a programas da saúde.',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'saude', code: '635', badge: 'teal',
    name: 'Royalties e participação especial — Saúde (Lei 12.858/2013)',
    spec: 'Controle dos recursos de royalties e participação especial vinculados à Saúde com base no art. 2º da Lei nº 12.858/2013.',
    /* Anexo III: dets 00, 49, 99 | CO: 0 */
    dets: ['00', '49', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '636', badge: 'teal',
    name: 'Convênios de entidades privadas/internacionais — Saúde',
    spec: 'Controle dos recursos de transferências de entidades privadas, estrangeiras ou multigovernamentais, vinculados à saúde.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'saude', code: '659', badge: 'teal',
    name: 'Outros recursos vinculados à Saúde',
    spec: 'Controle dos demais recursos vinculados à Saúde não enquadrados nas fontes 600 a 636.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },

  /* ── ASSISTÊNCIA SOCIAL ── */
  {
    block: 'assistencia', code: '660', badge: 'amber',
    name: 'FNAS — Fundo Nacional de Assistência Social',
    spec: 'Controle dos recursos originários de transferências do FNAS (Lei nº 8.742/1993).',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'assistencia', code: '661', badge: 'amber',
    name: 'Fundos estaduais de assistência social',
    spec: 'Controle dos recursos originários de transferências dos fundos estaduais de assistência social.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'assistencia', code: '662', badge: 'amber',
    name: 'Fundos municipais de assistência social',
    spec: 'Controle dos recursos originários de transferências dos fundos municipais de assistência social.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'assistencia', code: '665', badge: 'amber',
    name: 'Convênios e repasses — Assistência Social',
    spec: 'Controle dos recursos de convênios e instrumentos congêneres cuja destinação seja vinculada a programas da assistência social.',
    /* Anexo III: dets 50, 99 | COs: 0, 3110, 3120, 3210, 3220 */
    dets: ['50', '99'],
    cos: [0, 3110, 3120, 3210, 3220],
  },
  {
    block: 'assistencia', code: '669', badge: 'amber',
    name: 'Outros recursos vinculados à Assistência Social',
    spec: 'Controle dos demais recursos vinculados à Assistência Social não enquadrados nas fontes 660 a 665.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },

  /* ── DEMAIS TRANSFERÊNCIAS ── */
  {
    block: 'transferencias', code: '700', badge: 'coral',
    name: 'Convênios federais — demais áreas',
    spec: 'Controle dos recursos de convênios federais não vinculados à educação, saúde ou assistência social.',
    /* Anexo III: dets 00, 49, 50, 99 | COs: 0, 3110, 3120 */
    dets: ['00', '49', '50', '99'],
    cos: [0, 3110, 3120],
  },
  {
    block: 'transferencias', code: '701', badge: 'coral',
    name: 'Convênios estaduais — demais áreas',
    spec: 'Controle dos recursos de convênios estaduais não vinculados à educação, saúde ou assistência social.',
    /* Anexo III: dets 00, 49, 50, 99 | COs: 0, 3210, 3220 */
    dets: ['00', '49', '50', '99'],
    cos: [0, 3210, 3220],
  },
  {
    block: 'transferencias', code: '702', badge: 'coral',
    name: 'Convênios municipais — demais áreas',
    spec: 'Controle dos recursos de convênios de municípios não vinculados à educação, saúde ou assistência social.',
    /* Anexo III: dets 00, 49, 50, 99 | CO: 0 */
    dets: ['00', '49', '50', '99'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '703', badge: 'coral',
    name: 'Convênios de outras entidades — demais áreas',
    spec: 'Controle dos recursos de entidades privadas, estrangeiras ou multigovernamentais não vinculados à educação, saúde ou assistência social.',
    /* Anexo III: dets 00, 49, 50, 99 | CO: 0 */
    dets: ['00', '49', '50', '99'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '704', badge: 'coral',
    name: 'Compensações financeiras União — recursos naturais',
    spec: 'Recursos de royalties do petróleo, gás natural e bônus de assinatura, exceto os da Lei 12.858/2013 (saúde/educação) e exceto os classificados nas FR 720 e FR 721.',
    /* Anexo III: dets 00, 02, 50, 99 | CO: 0 */
    dets: ['00', '02', '50', '99'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '705', badge: 'coral',
    name: 'Compensações financeiras Estados — recursos naturais',
    spec: 'Controle dos recursos transferidos pelos Estados, originários da arrecadação de royalties do petróleo e gás natural.',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '706', badge: 'coral',
    name: 'Transferência especial da União (emenda individual impositiva)',
    spec: 'Recursos de emendas individuais impositivas transferidos pela União por meio de transferências especiais (art. 166-A da CF). Pelo menos 70% devem ser aplicados em despesas de capital. Vedada aplicação em pessoal e serviço da dívida. CO 3110 é obrigatório.',
    /* Anexo III: dets 00, 49, 50, 99 | CO: 3110 obrigatório (sem CO 0) */
    dets: ['00', '49', '50', '99'],
    cos: [3110],
  },
  {
    block: 'transferencias', code: '707', badge: 'coral',
    name: 'Transferências União — LC 173/2020, art. 5º, I',
    spec: 'Controle dos recursos provenientes de transferência da União com base no inciso I do art. 5º da Lei Complementar nº 173/2020.',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '708', badge: 'coral',
    name: 'Compensação financeira — recursos minerais (União)',
    spec: 'Controle dos recursos transferidos pela União referentes à compensação financeira pela exploração de recursos minerais (CFEM), em atendimento às destinações e vedações previstas em lei.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '709', badge: 'coral',
    name: 'Compensação financeira — recursos hídricos (União)',
    spec: 'Controle dos recursos transferidos pela União referentes à compensação financeira de recursos hídricos (CFURH), em atendimento às destinações e vedações previstas em lei.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '710', badge: 'coral',
    name: 'Transferência especial dos Estados (emenda individual impositiva)',
    spec: 'Controle dos recursos de emendas individuais impositivas transferidos pelos Estados por meio de transferências especiais, nos termos das Constituições Estaduais. CO 3210 é obrigatório.',
    /* Anexo III: dets 00, 49, 50, 99 | CO: 3210 obrigatório (sem CO 0) */
    dets: ['00', '49', '50', '99'],
    cos: [3210],
  },
  {
    block: 'transferencias', code: '711', badge: 'coral',
    name: 'Demais transferências obrigatórias União (não repartição)',
    spec: 'Controla recursos de transferências obrigatórias da União que não decorram de repartição de receitas, como auxílios e apoios financeiros, para os quais não haja fonte específica criada.',
    /* Anexo III: dets 00, 49, 50, 99 | CO: 0 */
    dets: ['00', '49', '50', '99'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '712', badge: 'coral',
    name: 'FUNPEN — Fundo Penitenciário Nacional',
    spec: 'Controla as transferências obrigatórias fundo a fundo de recursos do Fundo Penitenciário Nacional.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '713', badge: 'coral',
    name: 'FSP — Fundo de Segurança Pública',
    spec: 'Controla as transferências obrigatórias de recursos do Fundo de Segurança Pública.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '714', badge: 'coral',
    name: 'FAT — Fundo de Amparo ao Trabalhador',
    spec: 'Controla as transferências obrigatórias de recursos do FAT.',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '715', badge: 'coral',
    name: 'Setor cultural audiovisual — LC 195/2022, art. 5º',
    spec: 'Controla os recursos de transferências da União ao setor audiovisual como ação emergencial da pandemia de covid-19 (LC 195/2022, art. 5º).',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '716', badge: 'coral',
    name: 'Setor cultural — LC 195/2022, art. 8º (demais setores)',
    spec: 'Controla os recursos de transferências da União ao setor cultural em geral como ação emergencial da pandemia (LC 195/2022, art. 8º).',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '717', badge: 'coral',
    name: 'Assistência financeira — transporte coletivo (EC 123/2022)',
    spec: 'Controla os recursos para custeio da gratuidade nos transportes coletivos urbanos para maiores de 65 anos.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '719', badge: 'coral',
    name: 'Política Aldir Blanc — Lei 14.399/2022',
    spec: 'Controla os recursos das transferências para a Política Nacional Aldir Blanc de Fomento à Cultura (art. 6º da Lei nº 14.399/2022).',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '720', badge: 'coral',
    name: 'Royalties petróleo — Fundo Especial (FEP, Lei 9.478/1997)',
    spec: 'Transferências das participações na exploração de petróleo/gás destinadas ao FEP (art. 50-F da Lei 9.478/97), exceto os obrigatórios para educação e saúde da Lei 12.858/2013.',
    /* Anexo III: dets 00, 02, 49 | CO: 0 */
    dets: ['00', '02', '49'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '721', badge: 'coral',
    name: 'Cessão onerosa de petróleo — Lei 13.885/2019',
    spec: 'Controle dos recursos da cessão onerosa à PETROBRAS, originários dos leilões dos volumes excedentes ao limite do §2º do art. 1º da Lei nº 12.276 (Lei nº 13.885/2019).',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'transferencias', code: '747', badge: 'coral',
    name: 'Outras vinculações de transferências da União',
    spec: 'Controle dos recursos de outras transferências vinculadas da União não enquadrados nas fontes específicas anteriores. Admite COs de emendas parlamentares e calamidade pública.',
    /* Anexo III: dets 00, 50, 99 | COs: 0, 3101, 3110, 3111, 3120, 3121, 3130, 3140, 3210 */
    dets: ['00', '50', '99'],
    cos: [0, 3101, 3110, 3111, 3120, 3121, 3130, 3140, 3210],
  },
  {
    block: 'transferencias', code: '748', badge: 'coral',
    name: 'Outras vinculações de transferências dos Estados',
    spec: 'Controle dos recursos de outras transferências vinculadas dos Estados não enquadrados nas fontes anteriores. Admite COs de emendas estaduais individuais e de bancada.',
    /* Anexo III: dets 00, 50, 99 | COs: 0, 3110, 3210, 3220 */
    dets: ['00', '50', '99'],
    cos: [0, 3110, 3210, 3220],
  },
  {
    block: 'transferencias', code: '749', badge: 'coral',
    name: 'Outras vinculações de transferências (geral)',
    spec: 'Controle dos recursos de outras transferências vinculadas não enquadrados nas especificações anteriores. Admite COs de emendas da União e dos Estados, incluindo situações de calamidade pública.',
    /* Anexo III: dets 00, 49, 50, 99 | COs: 0, 3110, 3120, 3210, 3220 */
    dets: ['00', '49', '50', '99'],
    cos: [0, 3110, 3120, 3210, 3220],
  },

  /* ── DEMAIS VINCULAÇÕES LEGAIS ── */
  {
    block: 'legais', code: '750', badge: 'purple',
    name: 'CIDE — Contribuição de Intervenção no Domínio Econômico',
    spec: 'Controle dos recursos recebidos pelos Municípios decorrentes da distribuição da CIDE-Combustíveis (Lei nº 10.336/2001).',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'legais', code: '751', badge: 'purple',
    name: 'COSIP — Serviço de Iluminação Pública',
    spec: 'Controle dos recursos da Contribuição para o Custeio do Serviço de Iluminação Pública (art. 149-A da CF).',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'legais', code: '752', badge: 'purple',
    name: 'Recursos vinculados ao trânsito (multas)',
    spec: 'Controle dos recursos provenientes da cobrança de multas de trânsito (art. 320 do CTB — Lei nº 9.503/1997).',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'legais', code: '753', badge: 'purple',
    name: 'Taxas, contribuições e preços públicos',
    spec: 'Controle dos recursos de taxas, contribuições e preços públicos vinculados conforme legislações específicas. Inclui o detalhamento 01 para a Taxa de Vigilância Sanitária e det. 10 para FUNDOSAÚDE.',
    /* Anexo III: dets 00, 10 (FUNDOSAUDE), 50, 99 | CO: 0 */
    dets: ['00', '01', '10', '50', '99'],
    cos: [0],
  },
  {
    block: 'legais', code: '754', badge: 'purple',
    name: 'Operações de crédito (demais)',
    spec: 'Controle dos recursos de operações de crédito, exceto as vinculadas à educação (FR 574) e à saúde (FR 634).',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'legais', code: '755', badge: 'purple',
    name: 'Alienação de bens — administração direta',
    spec: 'Controle dos recursos decorrentes da alienação de bens da Administração Direta, nos termos do art. 44 da LRF.',
    /* Anexo III: dets 00, 49 | CO: 0 */
    dets: ['00', '49'],
    cos: [0],
  },
  {
    block: 'legais', code: '756', badge: 'purple',
    name: 'Alienação de bens — administração indireta',
    spec: 'Controle dos recursos decorrentes da alienação de bens da Administração Indireta, nos termos do art. 44 da LRF.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'legais', code: '757', badge: 'purple',
    name: 'Depósitos judiciais — lides em que o ente faz parte',
    spec: 'Controle dos recursos de depósitos judiciais apropriados pelo ente de lides das quais é parte (LC 151/2015 e art. 101 do ADCT da CF).',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'legais', code: '758', badge: 'purple',
    name: 'Depósitos judiciais — lides em que o ente não faz parte',
    spec: 'Controle dos recursos de depósitos judiciais de lides em que o ente não é parte (art. 101 do ADCT da CF).',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'legais', code: '759', badge: 'purple',
    name: 'Recursos vinculados a fundos (exceto saúde, educação, assistência e RPPS)',
    spec: 'Controle dos recursos vinculados a fundos públicos, com exceção dos fundos relacionados à saúde, à educação, à assistência social e aos regimes de previdência. Inclui det. 10 (FMMU — Tesouro), det. 60 (FMMU — Indiretas), det. 12 (FUHAB — Tesouro), det. 62 (FUHAB — Indiretas).',
    /* Anexo III: dets 00, 10, 12, 49, 50, 60, 62, 99 | CO: 0 */
    dets: ['00', '10', '12', '49', '50', '60', '62', '99'],
    cos: [0],
  },
  {
    block: 'legais', code: '760', badge: 'purple',
    name: 'Emolumentos, taxas e custas',
    spec: 'Controle dos recursos de emolumentos, taxas e custas arrecadadas judicial ou extrajudicialmente, observado o disposto em legislações específicas.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'legais', code: '761', badge: 'purple',
    name: 'Fundo de Combate e Erradicação da Pobreza',
    spec: 'Controle dos recursos vinculados ao Fundo de Combate e Erradicação da Pobreza, na forma prevista nos arts. 82 do ADCT e da LC nº 111/2001.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'legais', code: '762', badge: 'purple',
    name: 'Alienação de ativos — cessão de direitos creditórios',
    spec: 'Controle dos recursos recebidos da alienação de ativos em âmbito de cessão de direitos creditórios (art. 39-A, §6º da Lei 4.320/64 c/c art. 44 da LRF).',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'legais', code: '763', badge: 'purple',
    name: 'Recursos próprios dos Estados — Propag (LC 212/2025)',
    spec: 'Controla os recursos próprios dos Estados relativos ao percentual do saldo devedor das dívidas do art. 2º, §1º da LC 212/2025, a serem aplicados nas finalidades do Propag via fundo público específico.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'legais', code: '799', badge: 'purple',
    name: 'Outras vinculações legais',
    spec: 'Controle de outros recursos vinculados por lei não enquadrados nas especificações anteriores. Inclui det. 12 (outorga onerosa — Tesouro/FUHAB), det. 62 (outorga onerosa — Indiretas/FUHAB).',
    /* Anexo III: dets 00, 12, 49, 50, 62, 99 | CO: 0 */
    dets: ['00', '12', '49', '50', '62', '99'],
    cos: [0],
  },

  /* ── PREVIDÊNCIA ── */
  {
    block: 'previdencia', code: '800', badge: 'gray',
    name: 'RPPS — fundo em capitalização (plano previdenciário)',
    spec: 'Controle dos recursos vinculados ao fundo em capitalização do RPPS (Portaria MF nº 464/2018). Na despesa, associar ao CO que identifica o Poder ou Órgão executante (1111 = Executivo; 1121 = Legislativo).',
    /* Anexo III: dets 50, 64, 99 | COs: 1111, 1121 */
    dets: ['50', '64', '99'],
    cos: [1111, 1121],
  },
  {
    block: 'previdencia', code: '801', badge: 'gray',
    name: 'RPPS — fundo em repartição (plano financeiro)',
    spec: 'Controle dos recursos vinculados ao fundo em repartição do RPPS (Portaria MF nº 464/2018). Na despesa, associar ao CO do Poder ou Órgão (2111 = Executivo; 2121 = Legislativo).',
    /* Anexo III: dets 50, 99 | COs: 2111, 2121 */
    dets: ['50', '99'],
    cos: [2111, 2121],
  },
  {
    block: 'previdencia', code: '802', badge: 'gray',
    name: 'RPPS — taxa de administração',
    spec: 'Controle dos recursos para custeio das despesas de organização e funcionamento da unidade gestora do RPPS (Portaria MPS nº 402/2008 e Portaria MF nº 464/2018).',
    /* Anexo III: dets 50, 99 | CO: 0 */
    dets: ['50', '99'],
    cos: [0],
  },
  {
    block: 'previdencia', code: '803', badge: 'gray',
    name: 'Sistema de Proteção Social dos Militares (SPSM)',
    spec: 'Controle dos recursos vinculados ao SPSM, com base na Lei nº 6.880/1980 (Estatuto dos Militares), alterada pela Lei nº 13.954/2019.',
    dets: ['00'],
    cos: [2211],
  },
  {
    block: 'previdencia', code: '804', badge: 'gray',
    name: 'Demais recursos previdenciários',
    spec: 'Controle de demais recursos vinculados a benefícios previdenciários sob responsabilidade financeira direta do Tesouro, concedidos em atendimento a legislações específicas e não incorporados ao RPPS.',
    /* Anexo III: dets 00, 50, 99 | CO: 0 */
    dets: ['00', '50', '99'],
    cos: [0],
  },

  /* ── EXTRAORÇAMENTÁRIOS E OUTRAS ── */
  {
    block: 'outras', code: '860', badge: 'gray',
    name: 'Recursos extraorçamentários — precatórios',
    spec: 'Controle dos recursos financeiros junto aos tribunais de justiça vinculados ao pagamento de precatórios. Não há CO aplicável — registro apenas financeiro.',
    cos: [], dets: [],
  },
  {
    block: 'outras', code: '861', badge: 'gray',
    name: 'Recursos extraorçamentários — depósitos judiciais',
    spec: 'Controle dos recursos financeiros junto aos tribunais de justiça vinculados aos depósitos judiciais.',
    cos: [], dets: [],
  },
  {
    block: 'outras', code: '862', badge: 'gray',
    name: 'Depósitos de terceiros',
    spec: 'Controle dos recursos financeiros decorrentes de depósitos de terceiros junto ao ente.',
    cos: [], dets: [],
  },
  {
    block: 'outras', code: '869', badge: 'gray',
    name: 'Outros recursos extraorçamentários',
    spec: 'Controle dos demais recursos extraorçamentários, como retenções e consignações. O ente atua como mero depositário desses recursos.',
    cos: [], dets: [],
  },
  {
    block: 'outras', code: '880', badge: 'gray',
    name: 'Recursos próprios dos consórcios públicos',
    spec: 'Controle dos recursos próprios dos Consórcios Públicos. Utilizada exclusivamente pelos consórcios.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'outras', code: '898', badge: 'gray',
    name: 'Recursos a classificar',
    spec: 'Classificação temporária utilizada enquanto não se identifica a correta vinculação do recurso. Deve ser regularizada assim que a vinculação for identificada.',
    dets: ['00'],
    cos: [0],
  },
  {
    block: 'outras', code: '899', badge: 'gray',
    name: 'Outros recursos vinculados',
    spec: 'Controle dos recursos cuja aplicação seja vinculada e que não tenha sido enquadrado em outras especificações da tabela padronizada.',
    /* Anexo III: dets 00, 49, 50, 62, 99 | CO: 0 */
    dets: ['00', '49', '50', '62', '99'],
    cos: [0],
  },
];

/* ══════════════════════════════════════════════════════════════
   DETALHAMENTOS (Nível 3) — completos conforme Manual SSO
   ══════════════════════════════════════════════════════════════ */
const DETALHAMENTOS = [
  /* Faixa Tesouro: 00–49 */
  { code: '00', range: 'tesouro',  name: 'Padrão Tesouro — sem detalhamento específico',          desc: 'Registra a arrecadação de acordo com a descrição geral da fonte. A maioria das arrecadações do Tesouro usará este código.' },
  { code: '01', range: 'tesouro',  name: 'Taxa de vigilância sanitária',                          desc: 'Recurso vinculado referente à Taxa de Vigilância Sanitária. Inserido dentro da FR 753 (taxas, contribuições e preços públicos).' },
  { code: '02', range: 'tesouro',  name: 'Participação especial',                                  desc: 'Recurso de Participação Especial. Utilizado nas FR 501 (outros não vinculados), FR 704 (royalties recursos naturais) e FR 720 (royalties — FEP).' },
  { code: '03', range: 'tesouro',  name: 'Outros recursos não vinculados',                        desc: 'Dentro da FR 501 para recursos não vinculados com características distintas da Participação Especial.' },
  { code: '04', range: 'tesouro',  name: 'Taxa sem destinação específica (recurso livre)',         desc: 'Recurso de taxa que não possui destinação vinculada em lei. Enquadrado na FR 501 como recurso não vinculado.' },
  { code: '10', range: 'tesouro',  name: 'Fundo de Mobilidade Urbana — Tesouro (FMMU)',           desc: 'Recurso vinculado ao Fundo de Mobilidade Urbana arrecadado pelo Tesouro municipal. Dentro da FR 759 (recursos vinculados a fundos).' },
  { code: '12', range: 'tesouro',  name: 'Outorga onerosa do direito de construir — Tesouro',     desc: 'Recurso vinculado referente à outorga onerosa do direito de construir (art. 28 do Estatuto da Cidade). Dentro das FR 759 e FR 799.' },
  { code: '14', range: 'tesouro',  name: 'Transferências constitucionais de impostos',            desc: 'Recurso referente à arrecadação própria de impostos e às transferências constitucionais de impostos. Dentro da FR 500.' },
  { code: '48', range: 'tesouro',  name: 'Outros recursos não vinculados — Tesouro',              desc: 'Detalhamento adicional da FR 501 para outros recursos não vinculados do Tesouro, conforme necessidade de controle.' },
  { code: '49', range: 'tesouro',  name: 'Rendimento financeiro — Tesouro',                       desc: 'Registro dos rendimentos de aplicações financeiras de recursos do Tesouro. Segue a mesma fonte do recurso principal, conforme regra do MCASP.' },
  /* Faixa Indiretas: 50–99 */
  { code: '50', range: 'indireta', name: 'Padrão Indiretas — sem detalhamento específico',        desc: 'Registra a arrecadação das entidades da Administração Indireta de acordo com a descrição geral da fonte. A maioria das arrecadações das indiretas usará este código.' },
  { code: '51', range: 'indireta', name: 'Incentivo financeiro aos ACS e ACE (Fesaúde)',          desc: 'Recurso transferido junto ao vencimento dos Agentes Comunitários de Saúde e de Combate às Endemias, gerido pelo Fesaúde. Dentro da FR 604.' },
  { code: '54', range: 'indireta', name: 'Piso da enfermagem (Fesaúde)',                          desc: 'Recurso do piso salarial nacional da enfermagem gerido pelo Fesaúde. Dentro da FR 605.' },
  { code: '55', range: 'indireta', name: 'Assistência financeira complementar — Agentes Comunitários', desc: 'Assistência financeira complementar para pagamento dos ACS/ACE, gerida pelo Fesaúde. Dentro da FR 604.' },
  { code: '60', range: 'indireta', name: 'Fundo de Mobilidade Urbana — Indiretas (FMMU)',        desc: 'Recurso vinculado ao Fundo de Mobilidade Urbana arrecadado pelas entidades da Administração Indireta. Dentro da FR 759.' },
  { code: '62', range: 'indireta', name: 'Outorga onerosa do direito de construir — Indiretas',  desc: 'Recurso vinculado referente à outorga onerosa do direito de construir — Administração Indireta. Dentro das FR 759, FR 799 e FR 899.' },
  { code: '64', range: 'indireta', name: 'Aporte do déficit atuarial — RPPS (Capitalização)',    desc: 'Recurso referente ao aporte do déficit atuarial do Fundo Previdenciário. Dentro da FR 800 (RPPS — Plano Previdenciário).' },
  { code: '99', range: 'indireta', name: 'Rendimento financeiro — Indiretas',                    desc: 'Registro dos rendimentos de aplicações financeiras das entidades da Administração Indireta. Segue a mesma fonte do recurso principal.' },
];

/* ── COs para a seção completa ── */
const COS_FULL = [
  { code: 1001, group: 'Mínimos constitucionais' },
  { code: 1002, group: 'Mínimos constitucionais' },
  { code: 1010, group: 'Mínimos constitucionais' },
  { code: 1070, group: 'FUNDEB' },
  { code: 1071, group: 'FUNDEB' },
  { code: 1072, group: 'FUNDEB' },
  { code: 1110, group: 'Emendas — orçamento próprio' },
  { code: 1120, group: 'Emendas — orçamento próprio' },
  { code: 1130, group: 'Emendas — orçamento próprio' },
  { code: 1140, group: 'Emendas — orçamento próprio' },
  { code: 1190, group: 'Emendas — orçamento próprio' },
  { code: 1111, group: 'RPPS — Capitalização' },
  { code: 1121, group: 'RPPS — Capitalização' },
  { code: 1131, group: 'RPPS — Capitalização' },
  { code: 1141, group: 'RPPS — Capitalização' },
  { code: 1151, group: 'RPPS — Capitalização' },
  { code: 2111, group: 'RPPS — Repartição' },
  { code: 2121, group: 'RPPS — Repartição' },
  { code: 2131, group: 'RPPS — Repartição' },
  { code: 2141, group: 'RPPS — Repartição' },
  { code: 2151, group: 'RPPS — Repartição' },
  { code: 2211, group: 'RPPS — Militares' },
  { code: 3101, group: 'Calamidade pública' },
  { code: 3201, group: 'Calamidade pública' },
  { code: 3202, group: 'Calamidade pública' },
  { code: 3110, group: 'Emendas parlamentares — União' },
  { code: 3111, group: 'Emendas parlamentares — União' },
  { code: 3120, group: 'Emendas parlamentares — União' },
  { code: 3121, group: 'Emendas parlamentares — União' },
  { code: 3130, group: 'Emendas parlamentares — União' },
  { code: 3140, group: 'Emendas parlamentares — União' },
  { code: 3210, group: 'Emendas parlamentares — Estado' },
  { code: 3211, group: 'Emendas parlamentares — Estado' },
  { code: 3220, group: 'Emendas parlamentares — Estado' },
  { code: 3221, group: 'Emendas parlamentares — Estado' },
  { code: 5001, group: 'Precatórios' },
];
