/* eslint-disable prettier/prettier */

export const DESTRUCTION_DATA = {
    id: 'destruction',
    name: 'Distruzione',
    image: require('../../assets/schools/distruzione/distruzione.png'),
    text: 'Distruzione, caos, morte e devastazione, il mago della Scuola della Distruzione non ha altri obiettivi: divorare i propri avversari, annichilire il mondo e la vita stessa. Gli elementi della natura: acqua,aria,fuoco e terra s\'inchinano alla sua volont\u00e0 e non lasciano scampo a nessuno. Questo \u00e8 il terrificante potere del Mago della Distruzione. Demoni,palle di fuoco e meteore, sono solo alcune della magie d\'attacco di questa scuola orientata ossessivamente verso un\'unica strategia: combattere i nemici in campo aperto senza tregua o riguardo per niente e nessuno. La Scuola della Distruzione è adatta solo per Maghi estremamente potenti. Ogni sua magia proviene direttamente dalle fiamme dell\'Inferno. In tempi antichi i primi Maestri della Scuola siglarono col proprio sangue un patto con i demoni infernali, in modo da ottenere incommensurabili poteri ed aprire un portale oscuro tra il nostro mondo e la dimensione demoniaca. Anche dopo svariate generazioni, i maestri di questa Scuola continuano a sacrificare il proprio sangue e le proprie anime per evocare e controllare questi orridi demoni.\n\nIl simbolo della Scuola è la fiamma eterna dell\'inferno, fonte di tutto il suo potere. La Scuola concede al Mago che la domina devastanti abilità combattive, in grado d\'infliggere pesanti danni a medio e corto raggio. Molte magie bersagliano vaste Aree, per questo motivo i Maghi tendono a colpire stanze affollate o a raggruppare gli avversari in un determinato punto utilizzando specifiche magie.',
    keyElements: 'Danni ad Area, Danni Massivi, Distruzione di Eventi e Missioni, Blocco dei Movimenti, Posizionamento dell\'Instabilità, Conversione dell\'Instabilità',
    affinities: 'Trasmutazione, Necromanzia, Illusione',
    difficulty: 'Bassa',
    spells: [
        {
            image: require('../../assets/schools/distruzione/b01.png'),
            title: 'Urlo Demoniaco - Demon\'s Howl',
            effect: 'Una delle tue Evocazioni può agire immediatamente. Se muovi l\'evocazione, devi farlo prima di farla attaccare.',
            reverseEffect: 'Evoca 1 Malacoda sotto il tuo controllo nella stanza bersaglio. Se non ci sono Malacoda da evocare, non evochi nulla. Malacoda ha le seguenti caratteristiche:',
            reverseEvocationStats: {name: 'malacoda', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 3}, {type: 'health', value: 3}]},
        },
        {
            image: require('../../assets/schools/distruzione/b02.png'),
            title: 'Fulmine Distruttivo - Destructive Bolt',
            effect: 'Infliggi 3 danni a tutti i modelli nella stanza bersaglio: la stanza bersaglio non può essere attivata per questo turno. Gira il suo segnalino come se fosse stata utilizzata.',
            reverseEffect: 'Seleziona 1 bersaglio a distanza 1, poi un altro bersaglio a distanza 1 dal primo e un ultimo bersaglio a distanza 1 dal secondo. Infliggi 3 danni al primo, 2 al secondo e 1 al terzo bersaglio. I bersagli non devono essere per forza in linea retta.',
        },
        {
            image: require('../../assets/schools/distruzione/b03.png'),
            title: 'Palla di Fuoco - Fireball',
            effect: 'Infliggi 3 danni a tutti i modelli nella stanza bersaglio: ignora tutte le Magie di Protezione, gli avversari non possono innescarle.',
            reverseEffect: 'Infliggi 2 danni a tutti i modelli nella stanza bersaglio, poi per ogni modello colpito, assegna 1 segnalino instabilità alla stanza bersaglio (fino a un massimo di 4).',
        },
        {
            image: require('../../assets/schools/distruzione/b04.png'),
            title: 'Scatto Infuocato - Fire Dash',
            effect: 'Muoviti nella stanza bersaglio, poi infliggi 1 danno a tutti i modelli nella stanza bersaglio. Questo movimento non può innescare trappole ad eccezione di quelle innescate dalla stanza bersaglio.',
            reverseEffect: 'Infliggi 1 danno a tutti i modelli nella stanza in cui ti trovi, poi muoviti nella stanza bersaglio. Questo movimento non può innescare trappole ad eccezione di quelle innescate dalla stanza bersaglio.',
        },
        {
            image: require('../../assets/schools/distruzione/b05.png'),
            title: 'Fuoco del Destino - Fire of Fate',
            effect: 'Il Mago bersaglio scarta 1 Missione: guadagni 1 Punto Potere (anche nel caso che il bersaglio non abbia Missioni da scartare).',
            reverseEffect: 'Rimuovi un Evento dalla plancia degli Eventi e guadagni 2 Punti Potere. Non guadagni punti se non ci sono Eventi da scartare. La Rosa Nera non guadagna i punti dell\'Evento rimosso.',
        },
        {
            image: require('../../assets/schools/distruzione/b06.png'),
            title: 'Esplosione di Ghiaccio - Ice Burst',
            effect: 'Infliggi 2 danni a tutti i modelli nella stanza bersaglio. Fino alla fine del turno, i Maghi colpiti da questa Magia non possono usare la loro azione Fisica per muoversi. I maghi che ritornano nella loro Cella rimuovono il loro segnalino inibizione.',
            reverseEffect: 'Infliggi 2 danni a tutti i modelli nella stanza bersaglio. Tutti i Maghi colpiti da questa magia girano uno dei loro segnalini Azione Fisica come se fosse già stato utilizzato. Se loro non possiedono alcun segnalino Azione Fisica da girare, ne ignorano l\'effetto.',
        },
        {
            image: require('../../assets/schools/distruzione/b07.png'),
            title: 'Maelstrom',
            effect: 'Muovi nella stanza bersaglio tutti i modelli nelle stanze ad essa adiacenti, poi infliggi 2 danni a tutti i modelli nella stanza bersaglio. qualsiasi effetto che nega il movimento di un modello, nega anche l\u2019effetto di movimento di questa Magia.',
            reverseEffect: 'Infliggi 3 danni a tutti i modelli nella stanza bersaglio, poi assegna 2 segnalini instabilità a quella stanza.',
        },
        {
            image: require('../../assets/schools/distruzione/b08.png'),
            title: 'Sciame di Meteore - Meteor Swarm',
            effect: 'Infliggi 4 danni a tutti i modelli nella stanza bersaglio.',
            reverseEffect: 'Infliggi 3 danni a tutti i modelli nella stanza bersaglio, inoltre infliggi 3 danni a tutti i modelli nelle stanze ad essa adiacenti.',
        },
        {
            image: require('../../assets/schools/distruzione/b09.png'),
            title: 'Uragano Potente - Mighty Whirlwind',
            effect: 'Muovi il bersaglio di un passo in una stanza adiacente: se lo muovi in una stanza dove \u00e8 presente un altro modello, infliggi un danno ad entrambi.',
            reverseEffect: 'Per questo turno, i maghi nella stanza bersaglio non posso lasciare la stanza utilizzando una magia o la loro Azione Fisica.',
        },
        {
            image: require('../../assets/schools/distruzione/b10.png'),
            title: 'Armatura Oscusa - Obscure Armor',
            effect: 'Puoi ignorare interamente il prossimo danno che subiresti. Infliggi 1 danno al modello che ti ha attaccato.',
            reverseEffect: 'Puoi ignorare la prossima Trappola che ti bersaglia: questo significa che ignori interamente l\u2019effetto della Magia. Infliggi 3 danni al Mago che ha lanciato la Magia Trappola.',
        },
        {
            image: require('../../assets/schools/distruzione/b11.png'),
            title: 'Esplosione Oscura - Obscure Explosion',
            effect: 'Infliggi 2 danni a tutti i modelli nella stanza bersaglio. Puoi convertire fino a 3 segnalini instabilità nel tuo colore nella stanza bersaglio.',
            reverseEffect: 'Infliggi 2 danni a tutti i modelli nella stanza bersaglio. Gli Altari in quella stanza subiscono invece 5 danni.',
        },
        {
            image: require('../../assets/schools/distruzione/b12.png'),
            title: 'Freccia Instabile - Unstable Arrow',
            effect: 'Infliggi 2 danni al bersaglio, poi assegna 1 segnalino instabilità nella stanza del bersaglio.',
            reverseEffect: 'Seleziona fino a 2 differenti bersagli entro 2 di distanza, anche in stanze differenti: infliggi 1 danno ad ognuno, poi assegna 1 segnalino instabilit\u00e0 in ciascuna stanza in cui si trovano i bersagli.',
        },
    ],
};
