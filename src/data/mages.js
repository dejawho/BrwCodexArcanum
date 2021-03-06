/* eslint-disable prettier/prettier */
export const MAGES_DATA = [
    {
        name: 'Jaf\'ar',
        personalSpell: 'Leggere le Stelle',
        personalSpellImage: require('../../assets/schools/personal/h01.png'),
        personalSpellEffect: 'Guarda le prime 2 Missioni della terza Luna. Puoi scegliere di perdere 1 Punto Potere per tenere una delle due; rimetti l\'altra in cima al mazzo della terza Luna.',
        personalSpellReverseEffect: 'Guarda le prime 4 carte Evento della Luna attuale. Rimettile in cima al mazzo degli Eventi nell\'ordine che preferisci. Guadagni 1 Punto Potere.',
        image: require('../../assets/mages/jafar.jpg'),
        favouriteSchool: 'divination',
    },
    {
        name: 'Tessa',
        personalSpell: 'Collera della Natura',
        personalSpellImage: require('../../assets/schools/personal/h02.png'),
        personalSpellEffect: 'Puoi muoverti di un passo e attaccare un modello, dopo puoi muoverti di un altro passo e attaccare un altro modello (non puoi attacare due volte lo stesso modello).',
        personalSpellReverseEffect: 'Scegli una stanza entro distanza 1 e infliggi 1 danno a tutti i modelli nella stanza bersaglio, inoltre assegna 1 instabilit\u00e0 alla stanza bersaglio. Se la stanza bersaglio è quella in cui ti trovi, assegna 1 instabilità addizionale.',
        image: require('../../assets/mages/tessa.jpg'),
        favouriteSchool: 'trasmutation',
    },
    {
        name: 'Rebecca',
        personalSpell: 'Putrefare',
        personalSpellImage: require('../../assets/schools/personal/h03.png'),
        personalSpellEffect: 'Infliggi 3 danni ad un modello entro distanza 1. Se il bersaglio è un Mago, perde 1 Punto Potere.',
        personalSpellReverseEffect: 'Rimuovi un Non-Morto dal gioco e infliggi 4 danni ad un modello entro distanza 1 dal Non- Morto rimosso.',
        image: require('../../assets/mages/rebecca.jpg'),
        favouriteSchool: 'necromancy',
    },
    {
        name: 'Nero',
        personalSpell: 'Anello di Fuoco',
        personalSpellImage: require('../../assets/schools/personal/h04.png'),
        personalSpellEffect: 'Infliggi 2 danni a tutti i modelli nelle stanze adiacenti a quella in cui ti trovi.',
        personalSpellReverseEffect: 'Infliggi 2 danni a tutti i modelli in una stanza entro distanza 2. Fino alla fine del turno, se un Mago colpito dalla Magia lascia questa stanza usando una azione Fisica, gli infliggi altri 2 danni.',
        image: require('../../assets/mages/nero.jpg'),
        favouriteSchool: 'destruction',
    },
    {
        name: 'Medusa',
        personalSpell: 'Veleno Gorgone',
        personalSpellImage: require('../../assets/schools/personal/h05.png'),
        personalSpellEffect: 'Infliggi 2 danni al bersaglio. Poi se il bersaglio è un mago infliggigli 1 danno per ogni sua missione completata.',
        personalSpellReverseEffect: 'Infliggi 2 danni al bersaglio. Poi se il bersaglio è un mago infliggigli 1 danno per ogni tua missione completata.',
        image: require('../../assets/mages/medusa.png'),
        favouriteSchool: 'mythologic',
        set: 'Crono',
    },
    {
        name: 'Marco',
        personalSpell: 'Invisibilità',
        personalSpellImage: require('../../assets/schools/personal/h06.png'),
        personalSpellEffect: 'Puoi attivare questa protezione quando vieni bersagliato da una magia. Cancella il suo effetto, poi guadagna 1 punto potere.',
        personalSpellReverseEffect: 'Puoi attivare questa protezione quando vieni bersagliato da una magia di combattimento. Ignora l\'effetto di questa magia e scegli uno dei seguenti effetti:\nFelice: guadagni 1 punto potere.\nTriste: spostati nella stanza di chi ha lanciato la magia ed infliggigli 1 danno.',
        image: require('../../assets/mages/marco.png'),
        favouriteSchool: 'illusion',
        set: 'Hidden Thorns',
    },
    {
        name: 'Geneve',
        personalSpell: 'Danza della Morte',
        personalSpellImage: require('../../assets/schools/personal/h07.png'),
        personalSpellEffect: 'Spostati nella stanza del bersaglio, poi muovi il tuo mago ed il bersaglio fino a 2 stanze di distanza. Per ogni stanza attraversata infliggi 1 danno al bersaglio.',
        personalSpellReverseEffect: 'Spostati nella stanza del bersaglio, poi muovi il tuo mago ed il bersaglio in una stanza adiacente. Ruba 1 punto potere dal bersaglio.',
        image: require('../../assets/mages/geneve.png'),
        favouriteSchool: 'conspiration',
        set: 'Hidden Thorns',
    },
];


export const EVOCATIONS_DATA = [
    {
        name: 'Velocità',
        image: require('../../assets/evocations/speed.png'),
    },
    {
        name: 'Forza',
        image: require('../../assets/evocations/strenght.png'),
    },
    {
        name: 'Vita',
        image: require('../../assets/evocations/health.png'),
    },
];
