/* eslint-disable prettier/prettier */

export const MYTHOLOGIC_DATA = {
    id: 'mythologic',
    name: 'Mitologica',
    image: require('../../assets/schools/mitologica/mitologica.png'),
    text: 'La scuola Mitologica proviene dalla civiltà ellenica ed è stata creata grazie agli stretti legami dei Greci con le loro divinità che, oltre alla conoscenza e al potere, hanno anche donato loro diversi potenti artefatti. Gran parte di questa conoscenza non è riuscita a sopravvivere al passare dei secoli, ma alcuni stralci di questa bellicosa scuola sono riusciti a raggiungerci.\nQuesta scuola fa appello ad una forza immensa da investire nella battaglia e nella distruzione, degna degli dei che l\'hanno creata. Le Gorgoni hanno sfruttato questa energia in potenti incantesimi per invocare la forza e l\'impetuosità di Poseidone, l’astuzia di Ade ed i manufatti di Perseo caduti nella battaglia contro la stessa Medusa, la prima discendente di questa specie pericolosa e antenata del mago ancora legato a Crono.\nIl simbolo di questa scuola è un tributo all\'arte, ma anche al potere e all\'immortalità dell\'orgoglioso popolo ellenico.\nI maghi della scuola Mitologica possono scegliere di distruggere l\'arena usando la potente Vendetta di Poseidone, Dio del mare, o evocare il potente Minotauro di Creta per intrappolare i suoi avversari in labirinti mentali. Scegliere questa scuola di magia significa scegliere una strategia di combattimento ravvicinato o fare affidamento sulla distruzione della Loggia.',
    keyElements: 'Combattimento ravvicinato, Evocazione di equipaggiamenti, Posizionamento dell\'Instabilità, Movimento con incantesimi',
    affinities: 'Trasmutazione, Distruzione',
    difficulty: 'Media',
    spells: [
        {
            image: require('../../assets/schools/mitologica/h01.png'),
            title: 'Elmo di Ade - Ade\'s Helm',
            effect: 'Evoca l\'Elmo di Ade e pesca una carta dalla libreria. L\'elmo di ade ha le seguenti caratteristiche:{evocationStats}Finché possiedi l\'elmo come tua evocazione non puoi essere colpito da magie e bersaglio singolo. L\'elmo può ancora essere colpito.',
            reverseEffect: 'Posiziona il tuo modello in qualsiasi stanza. Dopo di ciò puoi attaccare.',
            evocationStats: {name: 'adeshelm', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: 3}]},
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h02.png'),
            title: 'Arco Dorato di Artemide - Artemis\' Golden Bow',
            effect: 'Evoca l\'arco dorato di Artemide. Dopo di ciò puoi infliggere 2 danni ad un bersagio entro distanza 2. L\'arco ha le seguenti caratteristiche:{evocationStats}L\'arco non è colpito da Danni ad Area. Finché possiedi l\'arco come evocazione puoi infliggere 1 danno entro distanza 1 invece di muoverti.',
            reverseEffect: 'Infliggi 4 danni al modello bersaglio',
            evocationStats: {name: 'artemisbow', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: 2}]},
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h03.png'),
            title: 'Catene di Minosse - Chains of Minos',
            effect: 'Infliggi 2 danni al modello bersaglio, poi muovilo in una stanza adiacente',
            reverseEffect: 'Infliggi 1 danno al modello bersaglio. Una delle tue evocazioni può agire ma solo se con il suo movimento può raggiungere il modello bersaglio.',
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h04.png'),
            title: 'Ira di Crono - Crono\'s Rage',
            effect: 'Piazza il modello bersaglio nella tua stessa stanza, poi infliggigli 2 danni.',
            reverseEffect: 'Infliggi 3 danni al modello bersaglio, poi muovilo in una stanza adiacente. Se lo muovi in una stanza con un altro modello infliggi 1 danno ad entrambi.',
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h05.png'),
            title: 'Cosniglio delle Graie - Graie\'s Counsel',
            effect: 'Guarda le prime 5 carte di una scuola di magia. Di queste 5 puoi tenere un massimo di 2 carte che abbiano 1 simbolo instabilità su di esse. Rimescola le carte rimanenti nel mazzo.',
            reverseEffect: 'Fino alla fine del turno, ogni volta che un modello entra nella tua stessa stanza o che tu entri in una stanza con almeno un modello, piazza 1 instabilità in quella stanza.',
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h06.png'),
            title: 'Labirinto - Labyrinth',
            effect: 'Rimuovi 3 cubi di instabilità del tuo colore dalla stanza bersaglio ed evoca la Vergogna di Creta, il Minotauro. Utilizza l\'apposita pedina/miniatura. La vergona di Creta ha le seguenti caratteristiche:{evocationStats}Ogni volta che la Vergogna di Creta attacca piazza 1 segnalino instabilità in quella stanza.',
            reverseEffect: 'Il mago bersaglio salta la sua prossima fase di attivazione, saltando quindi il round successivo. Poi guadagni 1 punto potere.',
            evocationStats: {name: 'cretedisgrace', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 3}, {type: 'health', value: 4}]},
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h07.png'),
            title: 'Scudo Lucente - Lucent Shield',
            effect: 'Evoca lo Scudo Lucente, poi puoi muoverti di 1 passo ed attaccare. Lo Scudo Lucente ha le seguenti caratteristiche:{evocationStats}Finché possiedi lo Scudo Lucente riduci tutti i danni presi di 1 e dai questo danno allo scudo.',
            reverseEffect: 'La prossima volta che subiresti danno puoi attivare questa protezione: riduci il prossimo danno subito di 2 ed infliggi 2 danni al tuo attaccante.',
            evocationStats: {name: 'lucentshield', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: 4}]},
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h08.png'),
            title: 'Pietrificare - Petrify',
            effect: 'Piazza 2 instabilità nella stanza bersaglio, poi tutti i maghi nella stanza bersaglio perdono tutte le loro azioni fisiche a meno che non paghino 1 punto potere.',
            reverseEffect: 'Perdi una delle tue Azioni Fisiche: fino alla fine del turno tutto il danno che subisci è diminuito di 1. Non puoi usare questo effetto se non perdi almeno un\'Azione Fisica',
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h09.png'),
            title: 'Vendetta di Poseidone - Poseidon Vengeance',
            effect: 'Converti 1 instabilità nella stanza bersaglio. Dopo di ciò puoi muovere tutte le instabilità in quella stanza in una stanza adiacente (se c\'è abbastanza spazio per muovere l\' instabilità). Le instabilità che non sono state mosse rimangono nella stanza.',
            reverseEffect: 'Piazza 3 instabilità nella stanza bersaglio',
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h10.png'),
            title: 'Sangue di Serpente - Snake\'s Blood',
            effect: 'Infliggi 2 danni a tutti i modelli nella stanza bersaglio ed in seguito 1 danno a tutti i bersagli nelle stanze adiacenti. Dopo che il danno è stato inflitto piazza il tuo mago nella stanza di uno dei bersagli colpiti da questa magia.',
            reverseEffect: 'Piazza 2 instabilità in una stanza bersaglio, poi converti 1 instabilità in tutte le stanze con almeno un mago. Puoi scegliere instabilità di un colore diverso dal tuo.',
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h11.png'),
            title: 'Lacrime di Perseo - Tears of Preseus',
            effect: 'Se un mago si trova in una stanza con dell\'instabilità del tuo colore puoi attivare la trappola: piazza il tuo mago in quella stanza ed attacca il bersaglio.',
            reverseEffect: 'Quando un mago piazza dell\'instabilità puoi attivare la trappola: piazza 2 instabilità nella stessa stanza in cui il bersaglio ha piazzato le sue.',
            set: 'Crono',
        },
        {
            image: require('../../assets/schools/mitologica/h12.png'),
            title: 'Tridente dei Mari - Trident of the Seas',
            effect: 'Evoca il Tridente dei Mari, poi puoi attaccare un modello entro distanza 1. Il Tridente dei Mari ha le seguenti caratteristiche:{evocationStats}Finché possiedi il Tridente ogni volta che un mago entra nella tua stessa stanza o tu entri in una stanza con un mago puoi infliggergli 1 danno.',
            reverseEffect: 'Infliggi 3 danni al modello bersaglio ignorando tutte le protezioni che non si attivano con questo effetto.',
            evocationStats: {name: 'seastrident',  stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: 3}]},
            set: 'Crono',
        },
    ],
};
