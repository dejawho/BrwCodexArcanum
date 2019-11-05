/* eslint-disable prettier/prettier */
export const TRASMUTATION_DATA = [
    {
        image: require('../../assets/schools/trasmutazione/f01.png'),
        title: 'Esplosione Acida - Acid Explosion',
        effect: 'Infliggi 1 danno al bersaglio: puoi scartare 1 carta dalla tua mano per infliggere 2 danni addizionali.',
        reverseEffect: 'Infliggi 1 danno a tutti i modelli nella stanza bersaglio, puoi scartare 1 carta dalla tua mano per assegnare 2 segnalini instabilit\u00e0 alla stanza bersaglio invece di infliggere 1 danno.',
    },
    {
        image: require('../../assets/schools/trasmutazione/f02.png'),
        title: 'Mutazione Sfigurante - Disfiguring Mutation',
        effect: 'Fino alla fine del turno, invece dell\'effetto normale puoi usare le tue azioni Fisiche per muovere ed attaccare.',
        reverseEffect: 'Diventi un Abominio fino alla fine del turno. La trasformazione in Abominio è considerata una Evocazione. L\'Abominio ha le seguenti caratteristiche:{evocationStats}Dove (X) è uguale alla tua salute.\nDurante la fase Azione, non ci sono cambiamenti se non per il valore di attacco, inoltre sei in grado di agire anche durante la fase della Evocazioni. L\'Abominio è influenzato da tutti gli effetti che influenzano Maghi ed Evocazioni; se l\'Abominio è rimosso, torni ad essere un Mago. Se sei sconfitto mentre sei un Abominio, ritorni nella tua cella come al solito senza perdere la forma di Abominio.',
        reverseEvocationStats: [{type: 'speed', value: 2}, {type: 'strength', value: 3}, {type: 'health', value: '(X)'}],
    },
    {
        image: require('../../assets/schools/trasmutazione/f03.png'),
        title: 'Rito dell\'Implosione - Implosion Rite',
        effect: 'Rimuovi un Altare Mutante (di quasiasi giocatore) da una stanza bersaglio entro distanza 2, poi assegna 4 instabilità a quella stanza.',
        reverseEffect: 'Evoca un Altare Mutante sotto il tuo controllo in una stanza entro distanza 1. L\'altare Mutante ha le seguenti caratteristiche:{evocationStats}Dopo aver evocato l\'Altare Mutante, assegna 1 Instabilità alla stanza in cui lo hai evocato.',
        reverseEvocationStats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: '4'}],
    },
    {
        image: require('../../assets/schools/trasmutazione/f04.png'),
        title: 'Eruzione Magica - Magic Eruption',
        effect: 'Quando subisci un qualsiasi danno puoi rivelare questa Protezione e assegna 1 instabilità alla stanza in cui ti trovi per ogni danno subito. Es. se subisci 5 danni, piazza 5 instabilità.',
        reverseEffect: 'Quando subisci un qualsiasi danno puoi rivelare questa Protezione per ignorarlo completamente. Sei ancora soggetto ad altri possibili effetti. Assegna 1 instabilit\u00e0 alla stanza in cui ti trovi.',
    },
    {
        image: require('../../assets/schools/trasmutazione/f05.png'),
        title: 'Rito della Mutazione - Mutation Rite',
        effect: 'Rimuovi un Altare Mutante (di quasiasi giocatore) da una stanza bersaglio entro distanza 2, Guadagni 2 Punti potere e assegna 2 instabilità a quella stanza.',
        reverseEffect: 'Evoca un Altare Mutante in una stanza entro distanza 1. L\'Altare Mutante ha le seguenti caratteristiche:{evocationStats}Dopo aver evocato l\'Altare Mutante, guadagni 1 Punto Potere.',
        reverseEvocationStats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: '4'}],
    },
    {
        image: require('../../assets/schools/trasmutazione/f06.png'),
        title: 'Sovraccarico - Overload',
        effect: 'Rimuovi fino a 2 instabilità (di qualsiasi tipo) dalla stanza bersaglio. Guadagni 1 Punto Potere per ogni instabilità rimossa in questo modo.',
        reverseEffect: 'Puoi assegnare 2 instabilità alla stanza bersaglio se contiene almeno un Altare (di qualsiasi tipo).',
    },
    {
        image: require('../../assets/schools/trasmutazione/f07.png'),
        title: 'Veleno della Putrefazione - Putrefying Poison',
        effect: 'Puoi muovere ed attaccare: inoltre fino alla fine del turno tutti gli attacchi fisici assegnano 1 instabilità alla stanza in cui ti trovi.',
        reverseEffect: 'Puoi piazzare 1 instabilità per ogni 2 danni presenti sulla barra della salute del bersaglio, arrotondando per difetto. Puoi piazzare al massimo 3 instabilità in questo modo.',
    },
    {
        image: require('../../assets/schools/trasmutazione/f08.png'),
        title: 'Rito del Cambiamento - Rite of Change',
        effect: 'La stanza bersaglio con almeno 1 Altare Mutante (di qualsiasi giocatore), diventa l\u2019esatta copia di un\u2019altra stanza della Loggia (ad eccezione della Stanza della Rosa Nera), copia anche gli effetti e il colore. Puoi immediatamente attivare la stanza obiettivo modificata, puoi completare una Missione che richiede l\'attivazione della stanza copiata in questo modo.',
        reverseEffect: 'Evoca un Altare Mutante nella stanza bersaglio. L\'Altare Mutante ha le seguenti caratteristiche:{evocationStats}Assegna alla stanza tante instabilità quanti sono gli Altari Mutanti in gioco (di qualsiasi giocatore).',
        reverseEvocationStats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: '4'}],
    },
    {
        image: require('../../assets/schools/trasmutazione/f09.png'),
        title: 'Rito del Controllo - Rite of Control',
        effect: 'Guadagni 1 Punto Potere e assegna 1 instabilità alla stanza bersaglio per ogni Altare in gioco (di qualsiasi giocatore). Puoi guadagnare massimo 4 Punti Potere e assegnare massimo 4 instabilità, in questo modo.',
        reverseEffect: 'Evoca un Altare Mutante nella stanza bersaglio. L\'Altare Mutante ha le seguenti caratteristiche:{evocationStats}Guadagni 1 Punto Potere per ogni Altare Mutante in gioco (di qualsiasi giocatore).',
        reverseEvocationStats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: '4'}],
    },
    {
        image: require('../../assets/schools/trasmutazione/f10.png'),
        title: 'Artigli di Pietra - Stone Claws',
        effect: 'Puoi muoverti di 1 passo e attaccare. I tuoi attacchi fisici acquisiscono la proprietà "Area" fino alla fine del turno: ogni volta che effettui un attacco fisico colpisci tutti i modelli nella stanza bersagliata dall\'attacco',
        reverseEffect: 'Puoi muoverti di 1 passo e attaccare. Fino alla fine del turno i tuoi attacchi fisici infliggono 3 danni. Le azioni Fisiche, e altri effetti che ti permettono di fare attacchi Fisici, infliggono 3 danni.',
    },
    {
        image: require('../../assets/schools/trasmutazione/f11.png'),
        title: 'Vincolo Instabile - Unstable Bind',
        effect: 'Rimuovi 3 instabilità dalla stanza bersaglio per curare 2 dei tuoi danni. Puoi bersagliare solo stanze che abbiano abbastanza instabilità da rimuovere.',
        reverseEffect: 'Rimuovi 3 instabilità dalla stanza bersaglio per evocare un Altare Mutante nella stanza bersaglio. L\'Altare Mutante ha le seguenti caratteristiche:{evocationStats}Puoi bersagliare solo stanze che abbiano abbastanza instabilità da rimuovere.',
        reverseEvocationStats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: '4'}],
    },
    {
        image: require('../../assets/schools/trasmutazione/f12.png'),
        title: 'Fiamme Instabili - Unstable Flames',
        effect: 'Puoi muoverti in una stanza adiacente e attaccare. Fino alla fine del turno, ogni volta che effettui un attacco Fisico (sia con una azione Fisica che con altri effetti) puoi rimuovere 1 instabilità (e solo una) dalla stanza in cui ti trovi, per infliggere 1 danno addizionale con il tuo attacco Fisico.',
        reverseEffect: 'Puoi muoverti in una stanza adiacente e attaccare. Fino alla fine del turno, ogni volta che effettui un attacco Fisico puoi assegnare 2 instabilità alla stanza dove ti trovi, invece di infliggere danni.',
    },
];

export const TRASMUTATION_DESCRIPTION = {
    name: 'Trasmutazione',
    image: require('../../assets/schools/trasmutazione/trasmutazione.png'),
    text: 'Un Trasmutatore ha come scopo quello di potenziare se stesso e modificare l\'ambiente che lo circonda tramite potenti magie, come ad esempio: Artigli di Roccia, Rito del Cambiamento, Rito del Controllo, Fiamme Instabili e Mutazione Sfigurante. Dotato di una forza fisica devastante, non teme il combattimento corpo a corpo, anche se non \u00e8 solo tramite brutali battaglie che essi sfruttano il potere della Trasmutazione. Un Trasmutatore mirerà, infatti, a controllare l\'2019ambiente e tutto ciò che lo circonda per garantirsi una superiorità schiacciante sugli avversari.\n\nLe Magie della Trasmutazione generano Instabilità, sfruttando le sue abilità superiori per mutare l\'ambiente circostante, fino a piegarne le leggi fisiche che lo caratterizzano. Il Simbolo della Scuola della Trasmutazione è una foglia, che rappresenta il costante mutamento della natura , mentre il colore verde richiama la bellezza selvaggia del creato. Alcune Magie della Trasmutazione, come le magie dei Riti, incrementano gli effetti basati sull\'instabilità,permettendo di assegnare segnalini Instabilità aggiuntivi alle stanze.',
    keyElements: 'Combattimento ravvicinato, Combinazione di possenti attacchi fisici, Riti di posizionamento, Posizionamento delle Instabilità, Movimento tramite magie, Guadagno di Punti Potere tramite Riti',
    affinities: 'Distruzione, Divinazione',
    difficulty: 'Media',
};
