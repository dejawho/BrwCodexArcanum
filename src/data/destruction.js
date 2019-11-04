/* eslint-disable prettier/prettier */
export const DESTRUCTION_DATA = [
    {
        image: require('../../assets/schools/cospirazione/a01.png'),
        title: 'Muro di Lame - Blade Barrage',
        effect: 'Nel momento in cui un modello entra in una stanza Rossa puoi rivelare questa trappola: infliggi 3 danni a tutti i modelli presenti in quella stanza e 1 danno a tutti i modelli nelle stanze adiacenti ad essa.',
        reverseEffect: 'Nel momento in cui un modello entra in una stanza Verde puoi rivelare questa trappola. Infliggi 2 danni al modello bersaglio; inoltre, se il modello lascia la stanza prima della fine del turno per quasiasi motivo (a meno che non sia mandato nella sua Cella), subisce altri 2 danni.',
    },
    {
        image: require('../../assets/schools/cospirazione/a02.png'),
        title: 'Patto di Sangue - Blood Pact',
        effect: 'Nel momento in cui un Mago entra nella stanza della Rosa Nera, puoi scegliere di rivelare questa trappola per rubare una delle sue Missione risolte e 2 Punti Potere. Non puoi rubare Missioni e/o Punti Potere se non ne ha.',
        reverseEffect: 'Nel momento in cui un Mago entra in una stanza Viola, puoi scegliere di rivelare questa trappola per rubargli 2 Punti Vittoria; inoltre il Mago non pu\u00f2 muovere usando Azioni Fisiche fino alla fine del turno. Questo effetto termina se il Mago \u00e8 mandato nella sua Cella.',
    },
    {
        image: require('../../assets/schools/cospirazione/a03.png'),
        title: 'Danza di Morte - Dance of Death',
        effect: 'Nel momento in cui un Mago ha appena risolto una Azione Fisica puoi rivelare questa trappola: infliggi 1 danno a quel Mago, poi muovilo di un Passo in una stanza adiacente.',
        reverseEffect: 'Nel momento in cui un Mago ha appena risolto una Azione Fisica puoi rivelare questa trappola: puoi muovere lui e un altro modello nella sua stessa stanza di un Passo in una stanza adiacente (la stanza deve essere la stessa per entrambi i modelli, il movimento dei due modelli \u00e8 contemporaneo). Guadagni 1 Punto Potere.',
    },
    {
        image: require('../../assets/schools/cospirazione/a04.png'),
        title: 'Vento Ingannatore - Deceiving Wind',
        effect: 'Puoi rivelare questa Protezione la prossima volta che subisci danni: riduci i danni subiti di 3. Guadagni 1 Punto Potere.',
        reverseEffect: 'Puoi rivelare questa Protezione se sei il bersaglio di una Magia a bersaglio singolo. Devia la Magia su un altro modello (valido per la Magia) entro 1 stanza da te. Se non ci sono bersagli validi, cancella la Magia. La Magia deviata \u00e8 sempre considerata del Mago che la ha lanciata.',
    },
    {
        image: require('../../assets/schools/cospirazione/a05.png'),
        title: 'Congedare - Dismiss',
        effect: 'Rimuovi tutte le Evocazioni dalla stanza bersaglio: guadagna 1 Punto Potere per ogni evocazione rimossa in questo modo, fino ad un massimo di 4 Punti Potere.',
        reverseEffect: 'Rimuovi un\'Evocazione bersaglio e prendine il posto: guadagna 1 Punto Potere. Puoi attivare la stanza in cui ti sei mosso se non è stata già attivata in questo turno.',
    },
    {
        image: require('../../assets/schools/cospirazione/a06.png'),
        title: 'Estorsione Magica - Extort Magic',
        effect: 'Guarda la mano del Mago bersaglio: puoi scambiare una sua magia con una delle tue. Se non hai Magie da scambiare, guarda solo la sua mano. Non puoi mai fare lo scambio con una Magia Dimenticata. Guadagni 1 Punto Potere.',
        reverseEffect: 'Scarta 1 carta dalla tua mano alle tue Memorie, poi rimuovi una Magia Pronta del Mago bersaglio: la carta rimossa deve essere messa nelle sue Memorie. Non puoi mai selezionare una Magia rapida in questo modo. Guadagni 1 Punto Potere.',
    },
    {
        image: require('../../assets/schools/cospirazione/a07.png'),
        title: 'Furto Magico - Magical Theft',
        effect: 'Quando un Mago risolve una Missione, puoi scegliere di rivelare questa Trappola. Il bersaglio della Trappola guadagna la ricompensa e i Punti della Missione risolta mentre tu aggiungi la carta all tue Missioni risolte (per la conta dei punti di fine partita).',
        reverseEffect: 'Quando un Mago risolve una Missione, puoi scelgiere di rivelare questa Trappola. Tu guadagni i Punti della Missione risolta mentre il Mago bersaglio guadagna la ricompensa indicata sulla carta. Il Mago Bersaglio aggiunge la carta alle sue Missioni risolte come di consueto.',
    },
    {
        image: require('../../assets/schools/cospirazione/a08.png'),
        title: 'Porta Magica - Magic Door',
        effect: 'Muovi il tuo Mago nella stanza bersaglio: se non è stata già attivata puoi attivare la stanza bersaglio.',
        reverseEffect: 'Scambia la tua posizione con quella del modello bersaglio: se non è stata già attivata, puoi attivare la stanza di destinazione.',
    },
    {
        image: require('../../assets/schools/cospirazione/a09.png'),
        title: 'Intuizione Oscura - Obsucre Intuition',
        effect: 'Pesca 2 Missioni dalla Luna corrente, scegline 1 e aggiungila alla tua mano. Dai l\'altra ad un altro Mago: se non puoi farlo (es. perché gli altri Maghi sono nelle loro Celle) o non vuoi farlo, scarta la Missione e perdi 2 Punti Potere (scartando la Missione in questo modo la Rosa Nera non guadagna Punti Potere).',
        reverseEffect: 'Cerca e pesca 1 carta a tua scelta da una pila degli scarti delle Scuole di Magie e aggiungila alla tua mano. Guadagni 1 Punto Potere.',
    },
    {
        image: require('../../assets/schools/cospirazione/a10.png'),
        title: 'Tramare - Plot',
        effect: 'Scarta un Evento attivo sulla plancia degli Eventi: poi dividi i punti ottenuti dall\'uscita dell\'Evento tra te e la Rosa Nera arrotondando per difetto, minimo 1 Punto Potere.',
        reverseEffect: 'Scarta 2 carte dal mazzo degli Eventi della Luna attuale: puoi immediatamente giocarne uno, risolvendo il suo effetto normalmente (la Rosa Nera guadagna i Punti Potere), e metti l\'altro in cima al mazzo. Se l\'Evento giocato ha il simbolo della Corona, guadagni 2 Punti Potere; altrimenti, prendi il segnalino del primo giocatore.',
    },
    {
        image: require('../../assets/schools/cospirazione/a11.png'),
        title: 'Marchio Profano - Profane Mark',
        effect: 'Nel momento in cui un Mago entra in una stanza Grigia, puoi scegliere di di rivelare questa Trappola: converti fino a 2 danni di ogni tipo presenti sul Mago bersaglio e guadagni 1 Punto Potere per ogni danno convertito in questo modo. Se non puoi convertire nessun danno, infliggi 3 danni al Mago bersaglio.',
        reverseEffect: 'Nel momento in cui un Mago entra in una stanza Gialla, puoi scegliere di rivelare questa Trappola: trasferisci fino a 2 danni (a tua scelta) dalla tua scheda al Mago bersaglio, guadagni 1 Punto potere per ogni danno che hai trasferito in questo modo.',
    },
    {
        image: require('../../assets/schools/cospirazione/a12.png'),
        title: 'Vento Sussurrante - Whispering Wind',
        effect: 'Muovi il bersaglio di 2 passi in qualsiasi direzione.',
        reverseEffect: 'Muovi tutti i modelli nella stanza bersaglio in una stanza adiacente. Ogni modello può essere mosso ina una stanza differente.',
    },
];

export const DESTRUCTION_DESCRIPTION = {
    name: 'DISTRUZIONE',
    image: require('../../assets/schools/distruzione/distruzione.png'),
    text: 'Distruzione, caos, morte e devastazione, il mago della Scuola della Distruzione non ha altri obiettivi: divorare i propri avversari, annichilire il mondo e la vita stessa. Gli elementi della natura: acqua,aria,fuoco e terra s\'inchinano alla sua volont\u00e0 e non lasciano scampo a nessuno. Questo \u00e8 il terrificante potere del Mago della Distruzione. Demoni,palle di fuoco e meteore, sono solo alcune della magie d\'attacco di questa scuola orientata ossessivamente verso un\'unica strategia: combattere i nemici in campo aperto senza tregua o riguardo per niente e nessuno. La Scuola della Distruzione è adatta solo per Maghi estremamente potenti. Ogni sua magia proviene direttamente dalle fiamme dell\'Inferno. In tempi antichi i primi Maestri della Scuola siglarono col proprio sangue un patto con i demoni infernali, in modo da ottenere incommensurabili poteri ed aprire un portale oscuro tra il nostro mondo e la dimensione demoniaca. Anche dopo svariate generazioni, i maestri di questa Scuola continuano a sacrificare il proprio sangue e le proprie anime per evocare e controllare questi orridi demoni.\n\nIl simbolo della Scuola è la fiamma eterna dell\'inferno, fonte di tutto il suo potere. La Scuola concede al Mago che la domina devastanti abilità combattive, in grado d\'infliggere pesanti danni a medio e corto raggio. Molte magie bersagliano vaste Aree, per questo motivo i Maghi tendono a colpire stanze affollate o a raggruppare gli avversari in un determinato punto utilizzando specifiche magie.',
    keyElements: 'Danni ad Area, Danni Massivi, Distruzione di Eventi e Missioni, Blocco dei Movimenti, Posizionamento dell\'Instabilità, Conversione dell\'Instabilità',
    affinities: 'Trasmutazione, Necromanzia, Illusione',
    difficulty: 'Bassa',
};
