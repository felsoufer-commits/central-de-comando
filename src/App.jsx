import { useState } from "react";

const sections = [
  {
    id: "produto",
    title: "01 — Definição do Produto",
    icon: "◼",
    content: () => (
      <div className="space-y-6">
        <div className="border-l-2 border-red-500 pl-4">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-1">Proposta em 1 frase</p>
          <p className="text-lg" style={{fontFamily: "'DM Sans', sans-serif"}}>
            {/* v3.0: proposta reescrita — sistema preditivo, não apenas reativo */}
            A Central de Comando aprende com cada tentativa do usuário, prevê quando o abandono vai acontecer, e intervém antes — com evidência de múltiplos ciclos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/30 rounded-lg p-4 border border-white/5">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Problema resolvido</p>
            <p className="text-sm text-white/80">
              O usuário não precisa de mais informação, mais motivação ou mais ferramentas. 
              O ciclo real é: decidir, começar, parar, se culpar, recomeçar. 
              O problema não é falta de vontade. É ausência de um sistema que funcione quando a vontade acaba.
            </p>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-white/5">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Transformação prometida</p>
            <p className="text-sm text-white/80">
              {/* v3.0: transformação atualizada — inclui precisão cumulativa */}
              Em 90 dias, o usuário terá dados de múltiplos ciclos sobre seus padrões de abandono, 
              saberá a faixa exata de dias em que costuma parar, e terá um sistema que fica 
              mais preciso a cada tentativa — incluindo as que falharam.
            </p>
          </div>
        </div>

        <div className="bg-red-950/30 border border-red-900/30 rounded-lg p-4">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-2">O que NÃO é</p>
          <ul className="text-sm text-white/70 space-y-1">
            <li>• Não rastreia hábitos. Rastreia padrões de abandono.</li>
            <li>• Não organiza tarefas. Detecta repetição comportamental.</li>
            <li>• Não ensina. Confronta com dados.</li>
            <li>• Não dá medalhas. Dá evidência.</li>
            {/* v3.0: novo item — diferencia de sistema reativo */}
            <li>• Não reage. Prevê.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "arquitetura",
    title: "02 — Arquitetura do MVP",
    icon: "◻",
    content: () => (
      <div className="space-y-5">
        <p className="text-sm text-white/50 mb-4">5 funcionalidades. Cada uma existe por um motivo específico.</p>
        
        {[
          {
            num: "F1",
            nome: "Declaração de Comando",
            objetivo: "O usuário registra, nas próprias palavras, o padrão que repete. Sem margem para abstração.",
            pratica: "No onboarding, o usuário preenche: 'O padrão que eu repito é ___'. 'O que isso me custa ___'. 'Da última vez, parei porque ___'. Isso gera o perfil de padrão. Não é meta. É diagnóstico.",
            critico: "Sem isso, o produto vira genérico. O padrão declarado é a âncora de toda a lógica de confronto."
          },
          {
            num: "F2",
            nome: "Check-in Diário (Radar)",
            objetivo: "Coletar dados de estado interno. Detectar sinais de recaída antes que virem abandono.",
            pratica: "Notificação 1x/dia. 3 perguntas via slider (0-10): 'Resistência a executar o que planejou' / 'Presença de justificativa interna' / 'Quanto do padrão antigo apareceu hoje'. Tempo: 15 segundos. Sem texto aberto. Só dados.",
            critico: "O check-in não é sobre produtividade. É um sensor. Quando os números sobem em sequência, o sistema sabe que a recaída está próxima."
          },
          {
            num: "F3",
            /* v3.0: nome atualizado — sistema agora é preditivo */
            nome: "Alerta Preditivo (Intensidade Progressiva)",
            /* v3.0: objetivo reescrito — previsão explícita */
            objetivo: "Prever quando o abandono vai acontecer e intervir antes. A intensidade escala com a probabilidade calculada — não apenas com dados do Radar, mas com o histórico de todos os ciclos anteriores.",
            /* v3.0: REESCRITO — substitui lógica de ciclo único por multi-ciclo + previsão */
            pratica: "O sistema opera em 3 níveis de intensidade, alimentados por 3 fontes: dados do Radar (tempo real), histórico da Declaração (contexto), e memória de múltiplos ciclos (padrão comprovado). NÍVEL 1: tendência leve + dia_atual fora da zona de risco. NÍVEL 2: tendência consistente OU dia_atual entrando na zona de risco. NÍVEL 3: proximidade de abandono calculada com probabilidade alta OU dia_atual dentro da faixa histórica de parada. A partir do 2o ciclo, todas as mensagens usam dados de ciclos anteriores.",
            critico: "Na v2, o sistema usava apenas a última tentativa. Isso é limitado. Com memória de múltiplos ciclos, o sistema transforma eventos isolados em padrão comprovado. A frase muda de 'da última vez você parou no dia 12' para 'nas últimas 3 tentativas, você parou entre o dia 10 e 13'. Isso é matematicamente mais difícil de ignorar."
          },
          {
            num: "F4",
            nome: "Protocolo de Sustentação",
            objetivo: "Oferecer uma ação mínima executável no momento em que o abandono está próximo.",
            pratica: "Quando o Alerta dispara, o sistema oferece 1 micro-ação (UMA): 'Interrupção mínima agora: faça isso por 5 minutos — sem negociar.' O usuário marca como feito ou não. Ambos são registro. Ambos viram dado.",
            critico: "Reduz o atrito no momento crítico. O sistema já decidiu a menor unidade viável."
          },
          {
            num: "F5",
            nome: "Mapa de Ciclos + Zona de Risco",
            /* v3.0: objetivo reescrito — inclui zona de risco visual */
            objetivo: "Mostrar ao usuário todos os seus ciclos anteriores, a faixa onde costuma parar (zona de risco), e onde está agora em relação a esse padrão comprovado.",
            /* v3.0: REESCRITO — mapa agora mostra múltiplos ciclos + zona de risco */
            pratica: "Timeline com notas do Radar do ciclo atual. Sobreposição visual dos ciclos anteriores como linhas fantasma (opacidade reduzida). Zona de Risco marcada como faixa colorida entre o menor e o maior dia de parada histórico. Comparação: 'Suas últimas [N] tentativas pararam entre o dia [min] e [max]. Hoje: dia [dia_atual].' Quando dia_atual entra na zona: destaque visual. Quando ultrapassa: Evento de Quebra.",
            critico: "O Mapa deixa de ser uma linha e vira um padrão visual. O usuário vê, graficamente, que ele para sempre na mesma faixa. Isso transforma percepção subjetiva ('acho que sempre paro') em evidência objetiva ('paro entre o dia 10 e 13, 3 vezes seguidas')."
          }
        ].map((f, i) => (
          <details key={i} className="group bg-black/20 border border-white/5 rounded-lg">
            <summary className="cursor-pointer p-4 flex items-center gap-3 hover:bg-white/5 transition-colors rounded-lg">
              <span className="text-red-500 font-mono text-xs">{f.num}</span>
              <span className="font-medium text-sm">{f.nome}</span>
              <span className="ml-auto text-white/20 group-open:rotate-90 transition-transform">→</span>
            </summary>
            <div className="px-4 pb-4 space-y-3 border-t border-white/5 pt-3">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Objetivo</p>
                <p className="text-sm text-white/70">{f.objetivo}</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Na prática</p>
                <p className="text-sm text-white/70">{f.pratica}</p>
              </div>
              <div>
                <p className="text-xs text-red-400/80 uppercase tracking-widest mb-1">Por que é crítico</p>
                <p className="text-sm text-white/70">{f.critico}</p>
              </div>
            </div>
          </details>
        ))}

        {/* Sistema de Intensidade Progressiva — mantido de v2.0, mensagens atualizadas para multi-ciclo */}
        <div className="mt-6 space-y-4">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-2">Sistema de Intensidade Progressiva — Spec de Comunicação</p>
          
          {[
            {
              nivel: "NÍVEL 1",
              tag: "Sinal Inicial",
              cor: "border-amber-500/30",
              tagCor: "text-amber-400",
              disparo: "Tendência leve (1-2 dias subindo) E dia_atual fora da zona de risco.",
              tom: "Observacional. Aponta dado sem pressionar.",
              mensagens: [
                /* v3.0: mensagens de Nível 1 agora mencionam zona de risco quando aplicável */
                "Sua resistência subiu nos últimos 2 dias. Sua zona de risco começa no dia [zona_inicio]. Hoje: dia [dia_atual].",
                "Justificativa interna acima de 5 por 2 dias seguidos. Seu padrão costuma começar assim.",
                "Seus dados estão mudando. O sistema está comparando com seus [total_ciclos] ciclos anteriores.",
              ],
              historico: "Ciclo 1: opcional. Ciclo 2+: mencionar zona de risco de forma leve. 'Sua faixa de parada histórica começa no dia [zona_inicio].'",
            },
            {
              nivel: "NÍVEL 2",
              tag: "Aproximação da Queda",
              cor: "border-orange-500/30",
              tagCor: "text-orange-400",
              /* v3.0: disparo inclui zona de risco como trigger automático */
              disparo: "Tendência consistente (2-3 dias) OU dia_atual entrou na zona de risco (entre media_parada - desvio e media_parada + desvio) OU probabilidade_abandono > 50%.",
              tom: "Direto. Usa histórico completo de múltiplos ciclos. Mostra faixa, não ponto.",
              mensagens: [
                /* v3.0: REESCRITAS — todas usam multi-ciclo */
                "Nas suas últimas [total_ciclos] tentativas, você parou entre o dia [zona_inicio] e [zona_fim]. Hoje é o dia [dia_atual]. Você está dentro dessa faixa.",
                "Você está entrando na zona onde normalmente abandona. Dia [dia_atual]. Seus dados dos últimos 3 dias: [valores]. O motivo mais frequente de parada: [motivo_recorrente].",
                "Seu padrão não é isolado. Em [total_ciclos] tentativas, você parou [vezes_na_faixa] vezes nessa mesma faixa. Seus dados atuais indicam o mesmo movimento.",
              ],
              historico: "Obrigatório e multi-ciclo. Toda mensagem deve conter: faixa de parada (zona de risco) + total de ciclos + motivo recorrente. Nunca referenciar apenas 'a última tentativa' quando existem múltiplos ciclos.",
            },
            {
              nivel: "NÍVEL 3",
              tag: "Ponto Crítico",
              cor: "border-red-500/30",
              tagCor: "text-red-400",
              /* v3.0: disparo inclui probabilidade calculada */
              disparo: "Probabilidade_abandono > 75% OU dia_atual = media_parada OU resistência >7 por 3+ dias dentro da zona de risco OU inatividade dentro da zona de risco.",
              tom: "Incisivo. Cruza todos os dados: Radar + Declaração + múltiplos ciclos + previsão. Mantém saída aberta.",
              mensagens: [
                /* v3.0: REESCRITAS — previsão explícita + multi-ciclo */
                "Se seus dados continuarem assim, você para em [dias_ate_abandono] dias. Nas últimas [total_ciclos] tentativas, foi exatamente aqui — entre o dia [zona_inicio] e [zona_fim]. O motivo foi sempre [motivo_recorrente].",
                "Dia [dia_atual]. Sua média de parada é dia [media_parada]. Você está a [diferenca] dias do ponto onde sempre para. Seus dados dos últimos 3 dias são idênticos ao padrão pré-abandono dos ciclos anteriores.",
                "Isso não é opinião. Em [total_ciclos] tentativas, você parou [vezes_na_faixa] vezes nessa faixa por [motivo_recorrente]. Hoje: dia [dia_atual]. Probabilidade de abandono nos próximos 3 dias: alta. Interrupção mínima agora ou repetição do ciclo.",
              ],
              historico: "Obrigatório, completo e preditivo. Toda mensagem deve conter: faixa de parada + media_parada + total_ciclos + motivo_recorrente + previsão de dias até abandono + dados recentes do Radar.",
            },
          ].map((n, i) => (
            <details key={i} className={`group bg-black/20 border ${n.cor} rounded-lg`}>
              <summary className="cursor-pointer p-4 flex items-center gap-3 hover:bg-white/5 transition-colors rounded-lg">
                <span className={`font-mono text-xs font-bold ${n.tagCor}`}>{n.nivel}</span>
                <span className="font-medium text-sm text-white/70">{n.tag}</span>
                <span className="ml-auto text-white/20 group-open:rotate-90 transition-transform">→</span>
              </summary>
              <div className="px-4 pb-4 space-y-3 border-t border-white/5 pt-3">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Regra de disparo</p>
                  <p className="text-sm text-white/70">{n.disparo}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Tom</p>
                  <p className="text-sm text-white/70">{n.tom}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Mensagens-modelo</p>
                  <div className="space-y-2">
                    {n.mensagens.map((m, j) => (
                      <p key={j} className="text-sm text-white/50 pl-3 border-l border-white/10 italic">"{m}"</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Uso de histórico</p>
                  <p className="text-sm text-white/70">{n.historico}</p>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Eventos de Quebra — mantido de v2.0, mensagens atualizadas para multi-ciclo */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Eventos de Quebra de Padrão — Spec de Comunicação</p>
          <div className="bg-black/20 border border-emerald-500/20 rounded-lg p-4 space-y-3">
            <div>
              <p className="text-xs text-emerald-400 uppercase tracking-widest mb-1">Regra de disparo</p>
              {/* v3.0: quebra agora é relativa à zona de risco, não apenas a melhor_tentativa */}
              <p className="text-sm text-white/70">dia_atual {">"} zona_fim (limite superior da faixa histórica de parada). Dispara uma única vez por ciclo, quando o usuário sai da zona de risco pelo lado positivo.</p>
            </div>
            <div>
              <p className="text-xs text-emerald-400 uppercase tracking-widest mb-2">Mensagens-modelo (sem elogio, só dado)</p>
              <div className="space-y-2">
                {/* v3.0: mensagens de quebra agora usam faixa, não ponto */}
                <p className="text-sm text-white/50 pl-3 border-l border-emerald-500/20 italic">"Nas suas últimas [total_ciclos] tentativas, você parou entre o dia [zona_inicio] e [zona_fim]. Hoje: dia [dia_atual]. Você saiu da faixa onde sempre parava."</p>
                <p className="text-sm text-white/50 pl-3 border-l border-emerald-500/20 italic">"Dia [dia_atual]. Nenhuma das suas [total_ciclos] tentativas anteriores passou desse ponto. O sistema atualizou sua referência."</p>
                <p className="text-sm text-white/50 pl-3 border-l border-emerald-500/20 italic">"Sua faixa de parada era dia [zona_inicio]–[zona_fim]. Hoje: dia [dia_atual]. Dado atualizado. O sistema continua monitorando."</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-emerald-400 uppercase tracking-widest mb-1">Regra de tom</p>
              <p className="text-sm text-white/70">Factual. Sem comemoração. O dado fala por si. O sistema registra e segue monitorando — a zona de risco será recalculada no próximo ciclo.</p>
            </div>
          </div>
        </div>

        {/* v3.0: NOVO BLOCO — Zona de Risco (conceito + spec) */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Zona de Risco — Definição e Lógica</p>
          <div className="bg-black/20 border border-red-500/20 rounded-lg p-4 space-y-4">
            <div>
              <p className="text-xs text-red-400 uppercase tracking-widest mb-1">Definição</p>
              <p className="text-sm text-white/70">A Zona de Risco é a faixa de dias onde o usuário historicamente abandona. Calculada a partir de todos os ciclos encerrados. É um intervalo, não um ponto.</p>
            </div>
            <div>
              <p className="text-xs text-red-400 uppercase tracking-widest mb-1">Cálculo</p>
              <div className="space-y-1 text-sm text-white/60">
                <p><span className="text-white/40 font-mono mr-2">CICLO 1</span>Zona de Risco = melhor_tentativa informada no onboarding (ponto único, não faixa). Se não informou: sem zona de risco até encerrar o primeiro ciclo.</p>
                <p><span className="text-white/40 font-mono mr-2">CICLO 2</span>Zona de Risco = [min(parada_ciclo_1, parada_ciclo_2), max(parada_ciclo_1, parada_ciclo_2)]. Faixa de 2 pontos.</p>
                <p><span className="text-white/40 font-mono mr-2">CICLO 3+</span>Zona de Risco = [media_parada - desvio_padrao, media_parada + desvio_padrao]. Faixa estatística. Quanto mais ciclos, mais precisa.</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-red-400 uppercase tracking-widest mb-1">Comportamento do sistema</p>
              <div className="space-y-1 text-sm text-white/60">
                <p><span className="text-white/40 font-mono mr-2">ANTES</span>dia_atual {"<"} zona_inicio: sistema opera normalmente. Níveis 1-3 baseados apenas em dados do Radar.</p>
                <p><span className="text-white/40 font-mono mr-2">DENTRO</span>zona_inicio {"≤"} dia_atual {"≤"} zona_fim: sistema entra em modo de risco. Nível mínimo = 2, independente dos dados do Radar. Dashboard muda para 'Dia [N] — zona de risco'. Mensagens usam faixa completa.</p>
                <p><span className="text-white/40 font-mono mr-2">DEPOIS</span>dia_atual {">"} zona_fim: Evento de Quebra. Sistema volta ao modo normal. Zona será recalculada quando o ciclo encerrar.</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-red-400 uppercase tracking-widest mb-1">Comunicação na zona</p>
              <div className="space-y-2">
                <p className="text-sm text-white/50 pl-3 border-l border-red-500/20 italic">"Você entrou na sua zona de risco. Historicamente, é aqui que você para."</p>
                <p className="text-sm text-white/50 pl-3 border-l border-red-500/20 italic">"Dia [dia_atual]. Sua faixa de parada: dia [zona_inicio] a [zona_fim]. Você está dentro dela."</p>
                <p className="text-sm text-white/50 pl-3 border-l border-red-500/20 italic">"Em [total_ciclos] tentativas, você parou [vezes_na_faixa] vezes nessa mesma faixa. Seus dados atuais indicam o mesmo movimento."</p>
              </div>
            </div>
          </div>
        </div>

        {/* v3.0: NOVO BLOCO — Previsão de Abandono (cálculo + spec) */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Previsão de Abandono — Lógica de Cálculo</p>
          <div className="bg-black/20 border border-purple-500/20 rounded-lg p-4 space-y-4">
            <div>
              <p className="text-xs text-purple-400 uppercase tracking-widest mb-1">Definição</p>
              <p className="text-sm text-white/70">probabilidade_abandono é um score calculado após cada check-in que estima a chance de o usuário abandonar nos próximos 3 dias. Usado para determinar nível de alerta e urgência das mensagens.</p>
            </div>
            <div>
              <p className="text-xs text-purple-400 uppercase tracking-widest mb-1">Fórmula (peso total = 100)</p>
              <div className="space-y-1 text-sm text-white/60">
                <p><span className="text-white/40 font-mono mr-2">RADAR</span>Peso 40. Média dos últimos 3 check-ins normalizada (0-10 → 0-40). Se média {">"} 6: contribui forte. Se {"<"} 4: contribui pouco.</p>
                <p><span className="text-white/40 font-mono mr-2">PROXIMIDADE</span>Peso 35. Distância de dia_atual até media_parada. Se dia_atual {"≥"} media_parada: contribuição máxima (35). Se falta 1-3 dias: contribuição alta (25-35). Se falta 4+: contribuição proporcional.</p>
                <p><span className="text-white/40 font-mono mr-2">PADRÃO</span>Peso 25. Número de ciclos que pararam nessa faixa / total de ciclos. Se 3 de 3 pararam aqui: 25. Se 2 de 4: 12.5.</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-purple-400 uppercase tracking-widest mb-1">Interpretação</p>
              <div className="space-y-1 text-sm text-white/60">
                <p><span className="text-white/40 font-mono mr-2">0-30</span>Baixa. Sistema opera normalmente.</p>
                <p><span className="text-white/40 font-mono mr-2">31-50</span>Moderada. Nível 1 se não ativo. Nível 2 se já ativo.</p>
                <p><span className="text-white/40 font-mono mr-2">51-75</span>Alta. Nível 2 mínimo. Mensagens incluem previsão: "Seu padrão indica interrupção próxima."</p>
                <p><span className="text-white/40 font-mono mr-2">76-100</span>Crítica. Nível 3. Mensagens incluem: "Se seus dados continuarem assim, você para em [N] dias."</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-purple-400 uppercase tracking-widest mb-1">Precisão cumulativa</p>
              <p className="text-sm text-white/70">Ciclo 1: probabilidade baseada apenas em Radar (peso PROXIMIDADE e PADRÃO = 0 se sem dados anteriores). Ciclo 2: PROXIMIDADE ativo. PADRÃO com 1 ponto de dado. Ciclo 3+: todos os pesos ativos. A fórmula fica mais precisa a cada ciclo encerrado. Isso é comunicado ao usuário: 'O sistema tem [N] ciclos de referência. Precisão atual: [baixa/moderada/alta].'</p>
            </div>
          </div>
        </div>

        {/* v3.0: NOVO BLOCO — Memória de Múltiplos Ciclos (campos calculados) */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Memória de Múltiplos Ciclos — Campos Calculados</p>
          <div className="bg-black/20 border border-cyan-500/20 rounded-lg p-4 space-y-3">
            <p className="text-sm text-white/60 mb-2">Calculados a partir da tabela Ciclo, atualizados quando um ciclo encerra:</p>
            <div className="space-y-2 text-sm text-white/60">
              <p><span className="text-cyan-400 font-mono mr-2 text-xs">total_ciclos</span>Número total de ciclos encerrados.</p>
              <p><span className="text-cyan-400 font-mono mr-2 text-xs">media_parada</span>Média aritmética de intervalo_parada de todos os ciclos.</p>
              <p><span className="text-cyan-400 font-mono mr-2 text-xs">zona_inicio</span>media_parada - desvio_padrao (ou min de todas as paradas se {"<"} 3 ciclos).</p>
              <p><span className="text-cyan-400 font-mono mr-2 text-xs">zona_fim</span>media_parada + desvio_padrao (ou max de todas as paradas se {"<"} 3 ciclos).</p>
              <p><span className="text-cyan-400 font-mono mr-2 text-xs">motivo_recorrente</span>Motivo de parada mais frequente entre todos os ciclos (modo estatístico de motivo_encerramento).</p>
              <p><span className="text-cyan-400 font-mono mr-2 text-xs">vezes_na_faixa</span>Número de ciclos que pararam dentro da zona de risco calculada.</p>
              <p><span className="text-cyan-400 font-mono mr-2 text-xs">probabilidade_abandono</span>Score 0-100, recalculado após cada check-in (ver fórmula acima).</p>
            </div>
          </div>
        </div>

        {/* Adaptação ao Comportamento — mantido de v2.0, mensagens atualizadas para multi-ciclo */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Adaptação ao Comportamento — Perfis de Resposta</p>
          <div className="space-y-3">
            {[
              {
                perfil: "Consistente",
                deteccao: "5+ dias consecutivos com check-in feito e média do Radar estável ou decrescente.",
                /* v3.0: mensagem atualizada — usa zona de risco */
                mensagem: "Dados dos últimos [N] dias estáveis. Sua zona de risco começa no dia [zona_inicio]. Hoje: dia [dia_atual].",
                tom: "Breve. Factual. Inclui distância até a zona de risco como referência passiva."
              },
              {
                perfil: "Oscilante",
                deteccao: "Alternância: dias bons (média <5) seguidos de dias de alerta (média >6), zigue-zague em 5+ dias.",
                /* v3.0: mensagem atualizada — usa padrão de ciclos anteriores */
                mensagem: "Você está alternando entre avanço e recuo. Nos ciclos anteriores, esse padrão de oscilação apareceu antes da parada. Seus últimos 5 dias: [média dia a dia].",
                tom: "Direto. Cruza oscilação atual com padrão pré-abandono de ciclos anteriores."
              },
              {
                perfil: "Inativo",
                deteccao: "2+ dias sem check-in.",
                /* v3.0: mensagem atualizada — usa faixa e contagem de ciclos */
                mensagem: "Você ficou [X] dias sem registrar. Nas suas últimas [total_ciclos] tentativas, a inatividade começou nesse mesmo ponto — entre o dia [zona_inicio] e [zona_fim]. Você quer repetir isso ou interromper agora?",
                tom: "Usa todo o histórico multi-ciclo. Não pergunta 'como você está'. Mostra o padrão e pergunta 'é isso que você quer repetir?'"
              },
            ].map((p, i) => (
              <div key={i} className="bg-black/20 border border-white/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-mono text-xs">PERFIL</span>
                  <span className="text-sm font-medium text-white/80">{p.perfil}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-white/40"><span className="font-mono text-xs mr-2">DETECÇÃO</span><span className="text-white/60">{p.deteccao}</span></p>
                  <p className="text-white/40"><span className="font-mono text-xs mr-2">MENSAGEM</span><span className="text-white/60 italic">"{p.mensagem}"</span></p>
                  <p className="text-white/40"><span className="font-mono text-xs mr-2">TOM</span><span className="text-white/60">{p.tom}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* v3.0: NOVO BLOCO — Evolução da Precisão (regra de comunicação) */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-3">Evolução da Precisão — Regra de Comunicação</p>
          <div className="bg-black/20 border border-white/5 rounded-lg p-4 space-y-2 text-sm text-white/60">
            <p><span className="text-white/40 font-mono mr-2">CICLO 1</span>Mensagens usam: padrao_declarado + razao_parada + dados do Radar. Sem previsão. Sem faixa. Sem zona de risco. O sistema diz: 'Dados insuficientes para previsão. O sistema está aprendendo.'</p>
            <p><span className="text-white/40 font-mono mr-2">CICLO 2</span>Mensagens adicionam: comparação com ciclo 1 (ponto a ponto). Zona de risco com 2 pontos. Previsão com precisão baixa. O sistema diz: 'O sistema tem 1 ciclo de referência.'</p>
            <p><span className="text-white/40 font-mono mr-2">CICLO 3</span>Mensagens usam: faixa estatística + motivo recorrente + previsão com precisão moderada. O sistema diz: 'O sistema tem 2 ciclos de referência. Precisão moderada.'</p>
            <p><span className="text-white/40 font-mono mr-2">CICLO 4+</span>Mensagens usam: todos os dados. Previsão com precisão alta. O sistema diz: 'O sistema tem [N] ciclos de referência. Precisão alta.'</p>
            <p><span className="text-white/40 font-mono mr-2">REGRA</span>O sistema nunca finge saber mais do que os dados permitem. No ciclo 1, não prevê. No ciclo 2, compara. No ciclo 3+, calcula. A honestidade sobre a precisão é parte do tom.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "fluxo",
    title: "03 — Fluxo do Usuário",
    icon: "◧",
    content: () => (
      <div className="space-y-5">
        {[
          {
            fase: "Primeiro acesso",
            tempo: "Minuto 0–3",
            desc: [
              "Tela escura. Texto: 'Isso não é um app. É um sistema para impedir que você volte.'",
              "Botão: 'Entrar' — sem tour, sem tutorial.",
              "Cadastro: email + senha. Sem nome. Sem foto.",
            ]
          },
          {
            fase: "Onboarding",
            tempo: "Minuto 3–7",
            desc: [
              "3 telas sequenciais. Sem pular.",
              "Tela 1: 'Qual padrão você repete?'",
              "Tela 2: 'O que isso te custa de verdade?'",
              "Tela 3: 'Da última vez, o que fez você parar?'",
              "Tela 4 (opcional): 'Quantos dias durou sua última tentativa?' — preenche zona de risco inicial como ponto único.",
              /* v3.0: nova pergunta para multi-ciclo no onboarding */
              "Tela 5 (opcional): 'Quantas vezes você já tentou mudar isso?' — preenche total_ciclos inicial para calibrar tom desde o início.",
              "Ao finalizar: 'Registro salvo. O sistema usa essas informações como referência.'",
            ]
          },
          {
            fase: "Dia 1",
            tempo: "Primeiro check-in",
            desc: [
              "Notificação às 20h: 'Radar. 15 segundos.'",
              "3 sliders. Responde. Salva.",
              /* v3.0: pós check-in agora informa sobre precisão do sistema */
              "Pós check-in: 'Dia 1 — registro feito. Dados insuficientes para previsão.'",
              "Sem elogio. Sem streak.",
            ]
          },
          {
            fase: "Dias 2–6",
            tempo: "Acumulação de dados",
            desc: [
              "Check-ins diários acumulam dados. Sistema em modo silencioso — só confirma registro.",
              "Se dados estáveis: 'Dia [N] — registro feito.'",
              "Se tendência leve (Nível 1): 'Sua resistência subiu nos últimos 2 dias. O sistema está registrando.'",
              "Tom é observacional. Não confronta cedo demais.",
            ]
          },
          {
            fase: "Dia 7",
            tempo: "Primeira semana completa",
            desc: [
              "Se padrão estável: '7 dias de dados registrados. Mapa de Ciclos disponível.'",
              "Se sinais de recaída (Nível 2): mensagem com histórico da Declaração.",
              "Se inativo por 2+ dias: mensagem de inatividade com faixa de parada.",
            ]
          },
          {
            fase: "Entrada na Zona de Risco",
            tempo: "Momento preditivo",
            /* v3.0: NOVO — fase que substitui "Próximo de melhor_tentativa" por conceito de zona */
            desc: [
              "Quando dia_atual atinge zona_inicio: sistema entra em modo de risco. Nível mínimo = 2.",
              "Dashboard muda para: 'Dia [N] — zona de risco.'",
              "Mensagem: 'Você entrou na sua zona de risco. Nas últimas [total_ciclos] tentativas, você parou entre o dia [zona_inicio] e [zona_fim]. Hoje: dia [dia_atual].'",
              "Se probabilidade_abandono > 75%: Nível 3. Mensagem: 'Se seus dados continuarem assim, você para em [dias_ate_abandono] dias.'",
              "Quando dia_atual ultrapassa zona_fim: Evento de Quebra. 'Nas suas últimas [total_ciclos] tentativas, você parou entre o dia [zona_inicio] e [zona_fim]. Hoje: dia [dia_atual]. Você saiu da faixa.'",
              "Depois da quebra: sistema volta ao modo normal. Zona será recalculada no próximo ciclo.",
            ]
          },
          {
            fase: "Quando falha",
            tempo: "—",
            desc: [
              "O sistema não pune. Não reseta nada. O ciclo encerrado vira dado para o próximo.",
              "Registra: intervalo_parada, motivo_encerramento, foi_padrao no Ciclo.",
              /* v3.0: confronto de falha agora usa multi-ciclo */
              "Se era o ciclo 1: 'Ciclo encerrado no dia [N] por [motivo]. O sistema agora tem 1 ciclo de referência para o próximo.'",
              "Se era o ciclo 2+: 'Ciclo encerrado no dia [N]. Sua faixa de parada agora é dia [zona_inicio]–[zona_fim], baseada em [total_ciclos] ciclos. O motivo mais frequente: [motivo_recorrente].'",
              "Botão: 'Iniciar novo ciclo' — reabre Declaração de Comando (pode editar ou manter).",
              "Ao iniciar novo ciclo: 'Ciclo [N+1] iniciado. O sistema tem [total_ciclos] ciclos de referência. Precisão: [nível].'",
            ]
          },
          {
            fase: "O que faz continuar",
            tempo: "Retenção",
            desc: [
              "O sistema acumula dados que só existem ali. Sair significa perder o histórico de múltiplos ciclos.",
              "O confronto usa as próprias palavras do usuário + evidência de múltiplos ciclos. Impossível de replicar.",
              /* v3.0: retenção reescrita para multi-ciclo + previsão */
              "Cada falha torna o sistema mais preciso. Abandonar o app significa abandonar a única ferramenta que aprende com as falhas anteriores.",
              "A previsão cria urgência baseada em dados: 'Se continuar assim, você para em 2 dias.' Isso não é opinião. É cálculo.",
            ]
          },
        ].map((f, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5" />
              {i < 7 && <div className="w-px flex-1 bg-white/10" />}
            </div>
            <div className="pb-6 flex-1">
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-sm font-medium">{f.fase}</p>
                <p className="text-xs text-white/30">{f.tempo}</p>
              </div>
              <div className="space-y-1.5">
                {f.desc.map((d, j) => (
                  <p key={j} className="text-sm text-white/60">{d}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "telas",
    title: "04 — Wireframes (Texto)",
    icon: "◨",
    content: () => (
      <div className="space-y-5">
        {[
          {
            tela: "Tela 1 — Entrada",
            elementos: [
              { tipo: "bg", val: "Fundo escuro (#0A0A0A)" },
              { tipo: "texto", val: "Headline: 'Isso não é um app. É um sistema para impedir que você volte.' — centralizado, 24px, branco" },
              { tipo: "texto", val: "Subtexto: 'Para quem sabe o que fazer, mas repete o padrão de sempre.' — 14px, cinza" },
              { tipo: "botão", val: "'Entrar' — vermelho (#DC2626), largura total" },
              { tipo: "link", val: "'Já tenho conta' — texto cinza, abaixo do botão" },
            ],
            acao: "Usuário toca 'Entrar' — Tela de cadastro (email + senha)",
            resposta: "Conta criada — redireciona para Onboarding"
          },
          {
            tela: "Tela 2 — Onboarding: Declaração",
            elementos: [
              { tipo: "progresso", val: "Barra de progresso: 3-5 etapas, indicador da etapa atual" },
              { tipo: "texto", val: "Perguntas sequenciais: padrão, custo, razão da parada, duração e número de tentativas anteriores" },
              { tipo: "input", val: "Campos de texto + numéricos conforme etapa" },
              { tipo: "botão", val: "'Próximo' — ativo só quando campo preenchido" },
            ],
            acao: "Usuário preenche 3 obrigatórias + 2 opcionais",
            resposta: "Ao finalizar: 'Registro salvo. O sistema usa essas informações como referência.'"
          },
          {
            tela: "Tela 3 — Dashboard (Home)",
            elementos: [
              { tipo: "header", val: "Topo: 'Central de Comando' — logo esquerda, config direita" },
              /* v3.0: dashboard agora tem 4 estados possíveis */
              { tipo: "card", val: "Card principal: 'Dia [N] — em comando' (normal) | 'Dia [N] — ponto de atenção' (Nível 1-2) | 'Dia [N] — zona de risco' (dentro da faixa) | 'Dia [N] — ponto crítico' (Nível 3)" },
              { tipo: "card", val: "Card Radar: 'Radar de hoje' — botão 'Registrar' se pendente, 'Registrado' se feito" },
              { tipo: "card", val: "Card Mapa de Ciclos: mini gráfico com zona de risco visível como faixa colorida" },
              /* v3.0: banner de alerta agora pode incluir previsão */
              { tipo: "alerta", val: "Se probabilidade > 50%: banner com previsão — 'Seus dados indicam interrupção nos próximos [N] dias.'" },
              /* v3.0: indicador de zona de risco sempre visível quando dados existem */
              { tipo: "indicador", val: "Se total_ciclos > 0: 'Zona de risco: dia [zona_inicio]–[zona_fim] | Hoje: dia [dia_atual]' — sempre visível" },
              /* v3.0: indicador de precisão do sistema */
              { tipo: "indicador", val: "'Sistema: [total_ciclos] ciclos de referência | Precisão: [baixa/moderada/alta]' — texto menor, cinza, rodapé do card" },
            ],
            acao: "Usuário vê status do dia, acessa Radar ou Mapa",
            resposta: "Cards tocáveis para expandir"
          },
          {
            tela: "Tela 4 — Radar (Check-in Diário)",
            elementos: [
              { tipo: "texto", val: "Título: 'Radar — [data de hoje]'" },
              { tipo: "slider", val: "Slider 1: 'Resistência a executar' — 0 a 10" },
              { tipo: "slider", val: "Slider 2: 'Justificativa interna' — 0 a 10" },
              { tipo: "slider", val: "Slider 3: 'Presença do padrão antigo' — 0 a 10" },
              { tipo: "botão", val: "'Registrar' — vermelho, largura total" },
            ],
            acao: "Usuário move 3 sliders — toca Registrar",
            /* v3.0: resposta pós check-in inclui probabilidade quando disponível */
            resposta: "Normal: 'Registro feito.' Se zona de risco: 'Registro feito. Você está dentro da zona de risco (dia [zona_inicio]–[zona_fim]).' Se previsão ativa: 'Registro feito. Probabilidade de interrupção nos próximos 3 dias: [nível].'"
          },
          {
            tela: "Tela 5 — Alerta de Padrão",
            elementos: [
              { tipo: "bg", val: "Nível 1: overlay amarelo. Nível 2: overlay laranja. Nível 3: overlay vermelho." },
              { tipo: "indicador", val: "Tag: 'NÍVEL [N]' + indicador de probabilidade se disponível" },
              { tipo: "texto", val: "Mensagem dinâmica conforme nível + multi-ciclo + previsão (ver spec na Arquitetura)" },
              { tipo: "texto", val: "Dados inline: Radar recente + faixa de parada + total de ciclos" },
              { tipo: "card", val: "Protocolo: 'Interrupção mínima agora: [descrição] por 5 minutos — sem negociar.'" },
              { tipo: "botões", val: "'Executado' / 'Não executado' — lado a lado" },
            ],
            acao: "Usuário lê os dados — executa ou não a micro-ação",
            resposta: "Se executou: 'Registro feito.' Se não: 'Hoje não foi executado. Isso é dado — não decisão final.'"
          },
          {
            tela: "Tela 6 — Mapa de Ciclos",
            elementos: [
              { tipo: "gráfico", val: "Linha do ciclo atual + linhas fantasma dos ciclos anteriores (opacidade reduzida)" },
              { tipo: "marcador", val: "Alertas por nível: amarelo/laranja/vermelho. Quebras: verde." },
              /* v3.0: zona de risco como elemento visual do Mapa */
              { tipo: "faixa", val: "Zona de Risco: faixa horizontal colorida (vermelho translúcido) entre dia [zona_inicio] e dia [zona_fim]" },
              { tipo: "texto", val: "Legenda: 'Faixa de parada: dia [zona_inicio]–[zona_fim] | Baseada em [total_ciclos] ciclos | Motivo mais frequente: [motivo_recorrente]'" },
              { tipo: "texto", val: "Se dentro da zona: 'Você está dentro da faixa onde parou [vezes_na_faixa] de [total_ciclos] vezes.'" },
              { tipo: "texto", val: "Se além da zona: 'Dia [dia_atual]. Nenhuma das suas [total_ciclos] tentativas passou desse ponto.'" },
              /* v3.0: lista de ciclos anteriores */
              { tipo: "lista", val: "Histórico: 'Ciclo 1: [N] dias, motivo [X]. Ciclo 2: [N] dias, motivo [X]. ...' — expansível" },
            ],
            acao: "Usuário visualiza todos os ciclos sobrepostos + zona de risco",
            resposta: "Dados atualizados a cada check-in. Zona recalculada a cada ciclo encerrado."
          },
        ].map((t, i) => (
          <details key={i} className="group bg-black/20 border border-white/5 rounded-lg">
            <summary className="cursor-pointer p-4 flex items-center gap-3 hover:bg-white/5 transition-colors rounded-lg">
              <span className="text-red-500 font-mono text-xs">T{i+1}</span>
              <span className="font-medium text-sm">{t.tela}</span>
              <span className="ml-auto text-white/20 group-open:rotate-90 transition-transform">→</span>
            </summary>
            <div className="px-4 pb-4 space-y-3 border-t border-white/5 pt-3">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Elementos</p>
                <div className="space-y-1.5">
                  {t.elementos.map((el, j) => (
                    <div key={j} className="flex gap-2 text-sm">
                      <span className="text-white/30 font-mono text-xs min-w-[60px] uppercase">{el.tipo}</span>
                      <span className="text-white/60">{el.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Ação do usuário</p>
                <p className="text-sm text-white/70">{t.acao}</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Resposta do sistema</p>
                <p className="text-sm text-white/70">{t.resposta}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    ),
  },
  {
    id: "retencao",
    title: "05 — Lógica de Retenção",
    icon: "◩",
    content: () => (
      <div className="space-y-5">
        <div className="bg-black/30 rounded-lg p-4 border border-white/5">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-2">Por que volta todo dia</p>
          <p className="text-sm text-white/70 mb-3">
            O check-in leva 15 segundos. A barreira é baixa de propósito. 
            Mas o motivo real de voltar: o sistema acumula dados que só existem ali. 
            Mais dias registrados, mais preciso o detector de padrão. Sair significa perder esses dados.
          </p>
          <p className="text-sm text-white/70">
            {/* v3.0: retenção por multi-ciclo */}
            Cada falha torna o sistema mais preciso. No ciclo 1, o sistema observa. No ciclo 3, prevê. Abandonar significa abandonar a única ferramenta que aprende com as falhas.
          </p>
        </div>

        <div className="bg-black/30 rounded-lg p-4 border border-white/5">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-2">O que cria dependência funcional</p>
          <div className="space-y-2 text-sm text-white/70">
            <p><span className="text-white/40 font-mono mr-2">1.</span>Dados de múltiplos ciclos — cada tentativa (incluindo falhas) alimenta a precisão do sistema. Perder isso significa recomeçar do zero.</p>
            <p><span className="text-white/40 font-mono mr-2">2.</span>Confronto com evidência acumulada — 'nas últimas 3 tentativas, você parou entre o dia 10 e 13' é mais difícil de ignorar que 'da última vez, parou no dia 12'.</p>
            <p><span className="text-white/40 font-mono mr-2">3.</span>Previsão baseada em dados — 'se continuar assim, você para em 2 dias' cria urgência que nenhum sistema reativo consegue.</p>
            <p><span className="text-white/40 font-mono mr-2">4.</span>Zona de risco visual — ver graficamente que você para sempre na mesma faixa transforma percepção em evidência.</p>
            <p><span className="text-white/40 font-mono mr-2">5.</span>Precisão cumulativa — o sistema diz quantos ciclos de referência tem. O usuário sabe que o sistema melhora a cada tentativa.</p>
          </div>
        </div>

        <div className="bg-black/30 rounded-lg p-4 border border-white/5">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-2">O que impede o abandono</p>
          <div className="space-y-2 text-sm text-white/70">
            <p><span className="text-white/40 font-mono mr-2">→</span>O sistema não depende de motivação. Funciona por previsão baseada em dados de múltiplos ciclos.</p>
            <p><span className="text-white/40 font-mono mr-2">→</span>Cada falha alimenta o sistema. A mensagem quando o usuário volta: "Ciclo anterior encerrado. O sistema agora tem [N] ciclos de referência. Precisão atualizada."</p>
            <p><span className="text-white/40 font-mono mr-2">→</span>A comunicação progressiva evita dessensibilização. O tom muda, o conteúdo muda, a precisão aumenta.</p>
            <p><span className="text-white/40 font-mono mr-2">→</span>A zona de risco é pessoal e insubstituível. Nenhum outro app sabe que o usuário para entre o dia 10 e 13.</p>
          </div>
        </div>

        {/* Evolução do tom — mantido de v2.0, sem alteração */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/5">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-2">Evolução do tom ao longo do tempo</p>
          <div className="space-y-2 text-sm text-white/70">
            <p><span className="text-white/40 font-mono mr-2">DIAS 1-3</span>Tom neutro. Confirmação de registro. Nenhum confronto.</p>
            <p><span className="text-white/40 font-mono mr-2">DIAS 4-7</span>Tom observacional. Nível 1 se tendência. Sem histórico profundo.</p>
            <p><span className="text-white/40 font-mono mr-2">DIAS 7-14</span>Tom direto. Nível 2 disponível. Histórico da Declaração + zona de risco entram nas mensagens.</p>
            <p><span className="text-white/40 font-mono mr-2">DIA 14+</span>Tom completo. Todos os níveis. Previsão ativa. Mensagens cruzam Radar + Declaração + multi-ciclo + probabilidade.</p>
            <p><span className="text-white/40 font-mono mr-2">REGRA</span>O tom nunca volta para trás. A calibragem é cumulativa entre ciclos.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "diferencial",
    title: "06 — Mecanismo Único",
    icon: "◪",
    content: () => (
      <div className="space-y-5">
        <p className="text-sm text-white/50 mb-2">Por que nada no mercado faz o que a Central de Comando faz:</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-white/40 text-xs uppercase tracking-widest">Categoria</th>
                <th className="text-left p-3 text-white/40 text-xs uppercase tracking-widest">O que faz</th>
                <th className="text-left p-3 text-white/40 text-xs uppercase tracking-widest">O que falta</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white/80">Apps de hábito</td>
                <td className="p-3">Rastreia ações repetidas</td>
                <td className="p-3">Não detecta abandono. Quando o usuário para, o app fica mudo.</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white/80">Apps de produtividade</td>
                <td className="p-3">Organiza tarefas e projetos</td>
                <td className="p-3">Assume que o problema é organização. O problema é repetição comportamental.</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white/80">Cursos online</td>
                <td className="p-3">Ensina conceitos e estratégias</td>
                <td className="p-3">O público já sabe o que fazer. Informação não é o gargalo.</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-3 font-medium text-white/80">Coaching/Terapia</td>
                <td className="p-3">Acompanhamento humano</td>
                <td className="p-3">Não funciona no momento exato da recaída. Depende de agendamento.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-950/30 border border-red-900/30 rounded-lg p-4 mt-4">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-2">O mecanismo único</p>
          <p className="text-sm text-white/80 mb-2">
            {/* v3.0: reescrito — sistema preditivo com memória cumulativa */}
            <strong>Memória de múltiplos ciclos + previsão de abandono + confronto preditivo baseado em evidência acumulada.</strong>
          </p>
          <p className="text-sm text-white/60">
            {/* v3.0: descrição completa do mecanismo atualizado */}
            O sistema coleta dados diários de estado interno, armazena o resultado de cada ciclo (incluindo falhas), 
            calcula uma zona de risco estatística (faixa de dias onde o usuário historicamente abandona), 
            prevê a probabilidade de abandono nos próximos 3 dias usando dados do Radar + proximidade da zona + padrão de ciclos anteriores, 
            e intervém com intensidade proporcional à probabilidade calculada. Cada falha torna o sistema mais preciso. 
            Nenhum produto no mercado faz isso: aprender com as falhas do próprio usuário para prever e prevenir a próxima.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "nocode",
    title: "07 — MVP No-Code",
    icon: "◫",
    content: () => (
      <div className="space-y-5">
        <div className="bg-black/30 rounded-lg p-4 border border-white/5">
          <p className="text-xs uppercase tracking-widest text-red-400 mb-2">Plataforma recomendada: Bubble</p>
          <p className="text-sm text-white/60">
            Bubble suporta lógica condicional complexa (necessária para os Alertas e cálculos de zona), 
            banco de dados nativo, scheduled workflows, e escala para 100–500 usuários na validação.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Estrutura de banco de dados</p>
          <div className="space-y-3">
            {[
              {
                tabela: "User",
                /* v3.0: campos de multi-ciclo e previsão adicionados */
                campos: "email, senha (auth nativa), data_cadastro, padrao_declarado (text), custo_declarado (text), razao_parada (text), dia_atual (number), melhor_tentativa (number), status_atual (enum: ativo/alerta/inativo/zona_risco), nivel_atual (enum: 0/1/2/3), total_ciclos (number), media_parada (number), zona_inicio (number), zona_fim (number), motivo_recorrente (text), probabilidade_abandono (number 0-100)"
              },
              {
                tabela: "CheckIn",
                campos: "user_id (rel → User), data, resistencia (number 0-10), justificativa (number 0-10), padrao_presente (number 0-10), media (number — calculado)"
              },
              {
                tabela: "Alerta",
                campos: "user_id (rel → User), data_disparo, tipo (enum: resistencia/justificativa/padrao/inatividade/quebra/zona_risco), nivel (enum: 1/2/3), mensagem (text — gerada dinamicamente), micro_acao (text), executou (boolean), probabilidade_no_disparo (number — snapshot)"
              },
              {
                tabela: "Ciclo",
                /* v3.0: campos de multi-ciclo adicionados */
                campos: "user_id (rel → User), tentativa_numero (number — auto-incremento), data_inicio, data_fim (nullable), intervalo_parada (number — dia em que parou), motivo_encerramento (text, nullable), foi_padrao (boolean), media_radar_final (number — média do Radar nos últimos 3 dias antes de parar)"
              }
            ].map((t, i) => (
              <div key={i} className="bg-black/20 border border-white/5 rounded-lg p-3">
                <p className="text-sm font-medium text-red-400 mb-1 font-mono">{t.tabela}</p>
                <p className="text-xs text-white/50">{t.campos}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Lógica de cálculo (Bubble Workflows)</p>
          <div className="space-y-2 text-sm text-white/60">
            <p><span className="text-white/40 font-mono mr-2">RADAR</span>Ao salvar check-in: media = (resistencia + justificativa + padrao_presente) / 3. Atualiza dia_atual (+1).</p>
            {/* v3.0: cálculo de probabilidade adicionado */}
            <p><span className="text-white/40 font-mono mr-2">PROB</span>Após cada check-in: calcular probabilidade_abandono = (media_radar_3d / 10 * 40) + (proximidade_score * 35) + (consistencia_score * 25). Proximidade_score = max(0, 1 - (media_parada - dia_atual) / media_parada) * 35. Consistencia_score = (ciclos_na_faixa / total_ciclos) * 25. Se total_ciclos = 0: usar apenas componente RADAR.</p>
            <p><span className="text-white/40 font-mono mr-2">NÍVEL</span>nivel_atual = max(nível por Radar, nível por zona de risco, nível por probabilidade). Se dentro da zona: mínimo 2. Se probabilidade {">"} 75%: mínimo 3.</p>
            <p><span className="text-white/40 font-mono mr-2">ALERTA</span>Se nivel_atual {">"} 0: criar Alerta. Mensagem montada com: template do nível + dados multi-ciclo (total_ciclos, zona_inicio, zona_fim, motivo_recorrente, probabilidade).</p>
            <p><span className="text-white/40 font-mono mr-2">QUEBRA</span>Se dia_atual {">"} zona_fim E não existe Alerta tipo "quebra" neste ciclo: criar Alerta tipo "quebra". Atualizar melhor_tentativa.</p>
            {/* v3.0: workflow de encerramento de ciclo */}
            <p><span className="text-white/40 font-mono mr-2">ENCERRAMENTO</span>Ao encerrar ciclo: salvar intervalo_parada = dia_atual, motivo_encerramento, media_radar_final. Recalcular: total_ciclos, media_parada, zona_inicio, zona_fim, motivo_recorrente no User.</p>
            <p><span className="text-white/40 font-mono mr-2">INATIVIDADE</span>Scheduled diário: users sem check-in por 2+ dias. Calcular nível com base em proximidade da zona. Montar mensagem multi-ciclo.</p>
            <p><span className="text-white/40 font-mono mr-2">MAPA</span>Buscar todos Ciclos + CheckIns. Renderizar ciclo atual + ciclos anteriores como linhas fantasma. Zona de risco como faixa. Alertas coloridos por nível. Quebras em verde.</p>
          </div>
        </div>

        <div className="bg-black/30 rounded-lg p-4 border border-white/5">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Notificações</p>
          <p className="text-sm text-white/60">
            MVP: email via SendGrid. Email diário às 20h. 
            Nível 0: 'Radar disponível.' 
            Nível 1: 'Seus dados mudaram.' 
            Nível 2: 'Seus dados indicam retorno ao padrão.' 
            Nível 3: 'Ponto crítico — seus dados preveem interrupção em [N] dias.' 
            Zona de risco: 'Você está dentro da sua zona de risco.' 
            Quebra: 'Você saiu da faixa onde sempre parava.' 
            V2: push via PWA.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "roadmap",
    title: "08 — Roadmap 30 Dias",
    icon: "◬",
    content: () => (
      <div className="space-y-5">
        {[
          {
            semana: "Semana 1",
            titulo: "Estrutura + Onboarding + Banco Multi-Ciclo",
            tarefas: [
              /* v3.0: banco atualizado para multi-ciclo desde o início */
              "Dia 1-2: Criar projeto Bubble. Configurar banco de dados com campos multi-ciclo (total_ciclos, media_parada, zona_inicio, zona_fim, motivo_recorrente, probabilidade_abandono no User; tentativa_numero, intervalo_parada, media_radar_final no Ciclo). Configurar autenticação.",
              "Dia 3-4: Construir onboarding (3 obrigatórias + 2 opcionais). Salvar Declaração + melhor_tentativa + total_ciclos inicial.",
              "Dia 5-6: Construir dashboard com 4 estados (comando/atenção/zona de risco/crítico). Indicador de zona de risco e precisão.",
              "Dia 7: Testar fluxo completo. Corrigir bugs.",
            ]
          },
          {
            semana: "Semana 2",
            titulo: "Radar + Probabilidade + Zona de Risco",
            tarefas: [
              "Dia 8-9: Construir Radar. Workflow de salvar CheckIn.",
              /* v3.0: cálculo de probabilidade e zona incluídos na semana 2 */
              "Dia 10-11: Implementar cálculo de probabilidade_abandono (fórmula de 3 componentes). Implementar cálculo de zona de risco (com fallback para ciclo 1). Email diário com assunto variável.",
              "Dia 12-13: Construir Mapa de Ciclos com sobreposição de ciclos anteriores + faixa de zona de risco. Implementar Evento de Quebra baseado em zona_fim.",
              "Dia 14: Testar: check-in — probabilidade calculada — zona ativa — alerta correto — Mapa com faixa. Corrigir bugs.",
            ]
          },
          {
            semana: "Semana 3",
            titulo: "Alertas Preditivos + Multi-Ciclo + Encerramento",
            tarefas: [
              "Dia 15-16: Construir tela Alerta com variação por nível + indicador de probabilidade. Templates de mensagem com variáveis multi-ciclo.",
              "Dia 17-18: Implementar montagem dinâmica (total_ciclos, zona, motivo_recorrente, probabilidade nos templates). Micro-ação + botões.",
              "Dia 19-20: Implementar workflow de encerramento de ciclo (salvar dados, recalcular zona/media/motivo). Implementar fluxo de novo ciclo. Perfis de comportamento com mensagens multi-ciclo.",
              "Dia 21: Testar cenários completos: ciclo 1 (sem previsão) → encerramento → ciclo 2 (com comparação) → encerramento → ciclo 3 (com previsão completa).",
            ]
          },
          {
            semana: "Semana 4",
            titulo: "Calibração + Lançamento",
            tarefas: [
              "Dia 22-23: Ajustar design. Responsivo. Calibrar thresholds de probabilidade com dados simulados.",
              "Dia 24-25: Landing page. Configurar domínio.",
              "Dia 26-27: Recrutar 10–20 beta testers. Foco do feedback: a zona de risco faz sentido? As mensagens preditivas são claras? A previsão de abandono é útil ou invasiva?",
              "Dia 28-30: Corrigir bugs. Calibrar fórmula de probabilidade com dados reais. Lançar para validação.",
            ]
          }
        ].map((s, i) => (
          <div key={i} className="bg-black/20 border border-white/5 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-500 text-white text-xs font-mono px-2 py-0.5 rounded">{s.semana}</span>
              <span className="text-sm font-medium text-white/80">{s.titulo}</span>
            </div>
            <div className="space-y-1.5">
              {s.tarefas.map((t, j) => (
                <p key={j} className="text-sm text-white/50 pl-3 border-l border-white/10">{t}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "erros",
    title: "09 — Erros Fatais",
    icon: "◭",
    content: () => (
      <div className="space-y-4">
        <p className="text-sm text-white/50 mb-2">O que vai matar este produto se você fizer:</p>
        
        {[
          {
            erro: "Adicionar gamificação superficial",
            detalhe: "Badges, streaks, pontos. O diferencial é confronto com dados, não recompensa."
          },
          {
            erro: "Construir app nativo no MVP",
            detalhe: "PWA via Bubble resolve. Valide a tese primeiro."
          },
          {
            erro: "Adicionar funcionalidades antes de validar as 5 core",
            detalhe: "Comunidade, IA, calendário, journaling — tudo depois. Se as 5 core não retêm, nada vai."
          },
          {
            erro: "Usar linguagem motivacional ou de coaching",
            detalhe: "O tom é: 'Seus dados indicam X.' Nunca: 'Você consegue!' Se o copy parece autoajuda, está errado."
          },
          {
            erro: "Fazer o onboarding pulável",
            detalhe: "A Declaração é obrigatória. Sem ela, os Alertas não têm contexto. O mecanismo todo colapsa."
          },
          {
            erro: "Resetar o histórico quando o usuário falha",
            detalhe: "A falha é dado. Apagar o histórico destrói o Mapa de Ciclos, a zona de risco e a previsão. O sistema mostra a falha, não esconde."
          },
          {
            erro: "Lançar sem beta testers",
            detalhe: "10 pessoas por 7 dias geram mais informação que 3 meses de desenvolvimento isolado."
          },
          {
            erro: "Cobrar antes de ter retenção",
            detalhe: "Se não voltam por 14 dias, cobrança não resolve. Primeiro valide retenção."
          },
          {
            erro: "Disparar Nível 3 cedo demais",
            detalhe: "Confrontar com força antes de 7 dias gera rejeição. Respeitar a progressão."
          },
          {
            erro: "Usar a mesma mensagem mais de uma vez no mesmo ciclo",
            detalhe: "Repetição dessensibiliza. Cada alerta deve variar — mesmo que o nível seja o mesmo."
          },
          {
            erro: "Tratar Evento de Quebra como celebração",
            detalhe: "O evento é dado, não conquista. A diferença é o que retém."
          },
          /* v3.0: novos erros fatais do sistema preditivo */
          {
            erro: "Mostrar probabilidade de abandono sem dados suficientes",
            detalhe: "No ciclo 1, o sistema não prevê. Mostrar '80% de chance de abandonar' sem histórico é desonesto e destrói confiança. A previsão só aparece quando há dados reais de ciclos anteriores."
          },
          {
            erro: "Tratar falha do ciclo como fim do relacionamento",
            detalhe: "A falha é o momento em que o sistema fica mais valioso. O encerramento de ciclo deve mostrar: 'O sistema agora tem mais dados para te ajudar.' A falha alimenta a precisão."
          },
          {
            erro: "Complicar a fórmula de probabilidade",
            detalhe: "A fórmula de 3 componentes (Radar + Proximidade + Padrão) é suficiente. Adicionar machine learning, correlações complexas ou variáveis demais no MVP destrói a capacidade de depurar e calibrar. Comece simples, calibre com dados reais."
          },
        ].map((e, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-red-500 mt-0.5">✕</span>
            <div>
              <p className="text-sm font-medium text-white/80">{e.erro}</p>
              <p className="text-sm text-white/50">{e.detalhe}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function CentralDeComandoMVP() {
  const [activeSection, setActiveSection] = useState("produto");

  const current = sections.find((s) => s.id === activeSection);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      
      {/* Header */}
      <div className="border-b border-white/5 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold tracking-tight" style={{fontFamily: "'JetBrains Mono', monospace"}}>
              CENTRAL DE COMANDO
            </h1>
            <p className="text-xs text-white/30 mt-0.5">MVP Spec — Documento Executável</p>
          </div>
          <span className="text-xs text-white/20 font-mono">v3.0</span>
        </div>
      </div>

      {/* Nav */}
      <div className="border-b border-white/5 overflow-x-auto" style={{scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch'}}>
        <div className="max-w-4xl mx-auto flex gap-0.5 px-4 py-2 min-w-max">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`px-3 py-1.5 text-xs rounded-md transition-all whitespace-nowrap ${
                activeSection === s.id
                  ? "bg-red-600/20 text-red-400 border border-red-500/20"
                  : "text-white/30 hover:text-white/50 hover:bg-white/5 border border-transparent"
              }`}
            >
              <span className="mr-1.5 opacity-50">{s.icon}</span>
              {s.title.split("—")[1]?.trim() || s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="text-red-500 opacity-40 text-sm">{current.icon}</span>
          {current.title}
        </h2>
        <current.content />
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 px-4 py-6 mt-12">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-xs text-white/20">Central de Comando — Universo Comando</p>
          <p className="text-xs text-white/20">Spec pronta para execução</p>
        </div>
      </div>
    </div>
  );
}
