/* eslint-disable prettier/prettier */

export const DIVINATION_DATA = {
    id: 'divination',
    name: 'Divinazione',
    image: require('../../assets/schools/divinazione/divinazione.png'),
    text: 'I Maghi di questa Scuola sono condannati a conoscere il destino delle persone e degli oggetti. Il Mago della Divinazione viene chiamato chiaroveggente,ricercatore o indovino ma egli è tutto questo e anche di più: non è un semplice strumento degli Dei che segue ciecamente la loro volontà, ma si tratta di un vero Maestro, Padrone del tempo e dello Spazio, un vero tessitore del fato. La Scuola della Divinazione è riservata ai Maghi che conoscono e sfruttano il fato della gente e il flusso degli eventi a proprio vantaggio. I Maestri di questa Scuola non lasciano nulla al caso, ogni mossa è eseguita come se si stesse giocando una partita a scacchi, con saggezza, sagacia ed estrema intelligenza. Tramite il dono della "Vista", le clessidre e i riti sacri riesumati da pagine di storie dimenticate, il Divinatore usa magie che esplorano il passato, prevedono il futuro e alterano il presente.Il simbolo di questa Scuola è l\'cchio della Chiaroveggenza, circondato da un sole dorato che simboleggia la Luce Sacra. L\'obiettivo della Divinazione è il completo controllo del gioco, sfruttando gli eventi e le attivazioni delle Stanze della Loggia.I Maghi usano le proprie magie per guardare le carte prima di pescarle, scegliere la Luna dalla quale attingere alle missioni che preferiscono e perfino garantirne il successo senza dover muovere un dito. Posso piazzare Altari per celebrare i Riti delle Stagioni ed ottenere Punti potere in questo modo; inoltre le carte Divinazione permettono di attivare le stanze, guardare e pescare numerose missioni e magie dalla Libreria.',
    keyElements: 'Evocazione di altari per ottenere Punti Potere e controllare il tavolo di gioco, Completamento delle Missioni, Ottenimento di Punti Potere, Cure rivolte a se stesso o alle proprie Evocazioni, Ricerca delle Carte Magia, Pesca Carte Magia',
    affinities: 'Cospirazione, Necromanzia',
    difficulty: 'Medio/Alta',
    spells: [
        {
            image: require('../../assets/schools/divinazione/c01.png'),
            title: 'Marchio Arcano - Arcane Mark',
            effect: 'Guarda tutte le Magie Pronte dei Maghi che si trovano nella stanza bersaglio. Guadagni 1 Punto Potere.',
            reverseEffect: 'Scegli un Mago bersaglio, poi dichiara un tipo di Magia (Combattimento, Contingenza, Protezione, Trappola). Fino alla fine del turno, ogni volta che quel Mago attiva una Magia del tipo selezionato, tu guadagni 1 Punto Potere (fino ad un massimo di 3 PP). Trappole e Protezioni danno punti nel momento in cui sono attivate, non \u00e8 necessario che siano rivelate.',
        },
        {
            image: require('../../assets/schools/divinazione/c02.png'),
            title: 'Visione Arcana - Arcane Vision',
            effect: 'Attiva la stanza bersaglio e risolvi il suo effetto. L\'effetto della stanza si risolve sempre dalla stanza che hai attivato. Es. attivando il Cimitero evochi un Lanzichenecco nel Cimitero, indipendentemente da dove hai lanciato questa Magia.',
            reverseEffect: 'Guarda le prime 5 carte di una Scuola di Magia in gioco. Scegli una di queste carte e aggiungila alla tua mano. Rimischia le altre nel mazzo della loro Scuola di Magia.',
        },
        {
            image: require('../../assets/schools/divinazione/c03.png'),
            title: 'Rito dell\'Autunno - Autumn Rite',
            effect: 'Rimuovi un Altare Divino dalla stanza bersaglio (l\'Altare può essere di un qualsiasi giocatore). Cura fino a 3 danni a tua scelta a tutti i modelli nella stanza bersaglio. Guadagni 1 Punto Potere per ogni modello a cui hai curato almeno 1 danno (fino a un massimo di 3 punti Potere).',
            reverseEffect: 'Evoca 1 Altare Divino nella stanza bersaglio. Guadagni 1 Punto Potere. L\'Altare Divino ha le seguenti caratteristiche:',
            reverseEvocationStats: {name: 'divine_altar', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: 4}]},
        },
        {
            image: require('../../assets/schools/divinazione/c10.png'),
            title: 'Rito della Primavera - Spring Rite',
            effect: 'Rimuovi un Altare Divino dalla stanza bersaglio (l\'ltare può essere di un qualunque giocatore). Assegna 1 segnalino instabilit\u00e0 alla stanza bersaglio e ad ogni stanza ad essa adiacente (distanza 1).',
            reverseEffect: 'Evoca 1 Altare Divino nella tua stanza. Guadagna 1 Punto Potere per ogni Altare Divino in gioco di qualsiasi giocatore. L\u2019Altare Divino ha le seguenti caratteristiche:',
            reverseEvocationStats: {name: 'divine_altar', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: 4}]},
        },
        {
            image: require('../../assets/schools/divinazione/c11.png'),
            title: 'Rito dell\'Estate - Summer Rite',
            effect: 'Rimuovi un Altare Divino dalla stanza bersaglio (l\'Altare può essere di un qualunque giocatore). Per questo turno tutte le stanze di un colore a tua scelta non possono essere attivate. Gira il segnalino attivazione delle stanze come se fossere gi\u00e0 attivate. Guadagni 2 Punti Potere.',
            reverseEffect: 'Evoca 1 Altare Divino nella tua stanza. Guadagna 1 Punto Potere per ogni Altare Divino in gioco di qualsiasi giocatore. L\u2019Altare Divino ha le seguenti caratteristiche:',
            reverseEvocationStats: {name: 'divine_altar', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: 4}]},
        },
        {
            image: require('../../assets/schools/divinazione/c12.png'),
            title: 'Rito dell\'Inverno - Winter Rite',
            effect: 'Rimuovi un Altare Divino dalla stanza bersaglio (l\'Altare può essere di un qualunque giocatore). Puoi scambiare una tua Magia in gioco, attivata o Pronta (inclusa questa), con una nella tua mano. Risolvi immediatamente l\u2019effetto della nuova Magia. Se giochi una Trappola o una Protezione, entra gi\u00e0 attiva. Guadagni 1 Punto Potere.',
            reverseEffect: 'Evoca 1 Altare Divino nella tua stanza. Guadagna 1 Punto Potere per ogni Altare Divino in gioco di qualsiasi giocatore. L’Altare Divino ha le seguenti caratteristiche:',
            reverseEvocationStats: {name: 'divine_altar', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: 4}]},
        },
        {
            image: require('../../assets/schools/divinazione/c04.png'),
            title: 'Cambiare il passato e il futuro - Change the past and future',
            effect: 'Pesca 1 Missione dalla Luna Attuale o dalla Luna successiva. Es. se la Luna attuale è la 1°, puoi pescare dalla 1° o dalla 2° Luna.',
            reverseEffect: 'Pesca 1 Missione dalla Luna precedente. Scegli se vuoi guadagnare la sua ricompensa in Punti Potere o aggiungere la carta alle tue Missioni completate. Questo effetto non può essere utilizzato durante la 1° Luna.',
        },
        {
            image: require('../../assets/schools/divinazione/c05.png'),
            title: 'Chiaroveggenza - Clairvoyance',
            effect: 'Quando sei il bersaglio di una Magia di Combattimento, puoi rivelare questa Protezione: ignora la Magia (che sia a bersaglio singolo o ad area), e guadagni 1 Punto Potere. Ignorare la Magia significa che tutti gli effetti sono cancellati, ma la Magia è considerata comunque lanciata.',
            reverseEffect: 'Quando sei il bersaglio di una Magia Trappola, puoi rivelare questa Protezione. Ignora la Magia (che sia a bersaglio singolo o ad area) e guadagni 1 Punto Potere. Ignorare la Magia significa che tutti gli effetti sono cancellati, ma la Magia è considerata comunque lanciata.',
        },
        {
            image: require('../../assets/schools/divinazione/c06.png'),
            title: 'Dimenticare il Dolore - Forget the Grief',
            effect: 'Cura 3 danni da tutti i modelli nella stanza bersaglio (incluso te stesso), guadagni 1 Punto Potere. Puoi scegliere quali danni curare.',
            reverseEffect: 'Converti fino a 4 dei tuoi danni. Guadagni 2 Punti potere. I tuoi danni contano nella classifica quando vieni sconfitto ma non ti permettono di guadagnare Punti Potere.',
        },
        {
            image: require('../../assets/schools/divinazione/c07.png'),
            title: 'Clessidra - Hourglass',
            effect: 'Guarda le Missioni dei Maghi nella stanza bersaglio. Puoi scegliere di prendere 1 di queste Missioni: se lo fai, il Mago a cui l\'hai presa pesca una Missione dalla Luna precedente. Se questa magia è lanciata durante la 1° Luna, il Mago scelto non pesca nessuna Missione.',
            reverseEffect: 'Guarda i primi 3 Eventi dal mazzo della Luna corrente. Puoi giocare uno di questi eventi: se lo fai, guadagni 2 Punti Potere, poi risolvi l\u2019evento normalmente. Riposiziona gli altri eventi in cima al loro mazzo nell\u2019ordine che preferisci.',
        },
        {
            image: require('../../assets/schools/divinazione/c08.png'),
            title: 'Leggere il passato e il futuro - Read the Past and Future',
            effect: 'Guarda le prime 4 carte del tuo Grimorio, scegline 2 e aggiungile alla tua mano. Rimetti le altre 2 in cima al tuo mazzo nell\u2019ordine che preferisci.',
            reverseEffect: 'Pesca le prime 2 carte dalle tue Memorie e aggiungile alla tua mano.',
        },
        {
            image: require('../../assets/schools/divinazione/c09.png'),
            title: 'Cambio di Trama - Change the Plot',
            effect: 'Seleziona una stanza già attivata. Puoi attivare quella stanza di nuovo. Guadagni 1 Punto Potere. Risolvi l\'effetto della stanza attivata. Non puoi bersagliare la Stanza della Rosa nera con questa Magia.',
            reverseEffect: 'Rimuovi l\'ultima Magia giocata (attivata o pronta) da ogni Mago nella stanza bersaglio. La Magia rimossa torna nelle Memorie del suo possessore. Guadagni 1 Punto Potere per ogni mago colpito da questa Magia.',
        },
    ],
};
