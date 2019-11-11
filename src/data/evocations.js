/* eslint-disable prettier/prettier */
export const EVOCATION_DATA = [
    {
        name: 'andromeda',
        label: 'Andromeda',
        image: require('../../assets/evocations/andromeda.png'),
        effect: 'Invece di attaccare, Andromeda può attivare le stanze (tutti gli effetti si originano da lei ma tu guadagni i bonus) o rimuovere una instabilità dalla stanza dove si trova.',
    },
    {
        name: 'abomination',
        label: 'Abominio',
        image: require('../../assets/evocations/abomination.png'),
    },
    {
        name: 'boneknight',
        label: 'Cavaliere D\'Ossa',
        image: require('../../assets/evocations/boneknight.png'),
    },
    {
        name: 'cerbero',
        label: 'Cerbero',
        image: require('../../assets/evocations/cerbero.png'),
        effect: 'Ogni volta che attacca converte un danno sul suo bersaglio.',
    },
    {
        name: 'mutant_altar',
        label: 'Altare Mutante',
        image: require('../../assets/evocations/mutantaltar.png'),
    },
    {
        name: 'divine_altar',
        label: 'Altare Divino',
        image: require('../../assets/evocations/divinealtar.png'),
    },
    {
        name: 'lanzichenecco',
        label: 'Lanzichenecco',
        image: require('../../assets/evocations/lanzichenecco.png'),
    },
    {
        name: 'malacoda',
        label: 'Malacoda',
        image: require('../../assets/evocations/malacoda.png'),
    },
    {
        name: 'creteinfamy',
        label: 'Infamia di Creta',
        image: require('../../assets/evocations/creteinfamy.png'),
        effect: 'Ogni volta che entra in una stanza infligge 4 danni a tutti i modelli nella stanza.',
    },
    {
        name: 'cretedisgrace',
        label: 'Vergogna di Creta',
        image: require('../../assets/evocations/cretedisgrace.png'),
        set: 'Crono',
        effect: 'Ogni volta che la Vergogna di Creta attacca piazza 1 segnalino instabilità in quella stanza.',
    },
    {
        name: 'crono',
        label: 'Crono',
        set: 'Crono',
        image: require('../../assets/evocations/crono.png'),
        effect: 'Crono ha tanta salute quanto il numero di giocatori moltiplicato per 5. Quando Crono viene attivato piazza un\'instabilità su ogni stanza adiacente. Crono non puoi essere spostato o rimosso da nessun effetto',
    },
    {
        name: 'adeshelm',
        label: 'Elmo di Ade',
        set: 'Crono',
        image: require('../../assets/evocations/adeshelm.png'),
        effect: 'Finché possiedi l\'elmo come tua evocazione non puoi essere colpito da magie e bersaglio singolo. L\'elmo può ancora essere colpito.',
    },
    {
        name: 'lucentshield',
        label: 'Scudo Lucente',
        set: 'Crono',
        image: require('../../assets/evocations/lucentshield.png'),
        effect: 'Finché possiedi lo Scudo Lucente riduci tutti i danni presi di 1 e dai questo danno allo scudo.',
    },
    {
        name: 'artemisbow',
        label: 'Arco Dorato di Artemide',
        image: require('../../assets/evocations/artemisgoldenbow.png'),
        set: 'Crono',
        effect: 'L\'arco non è colpito da Danni ad Area. Finché possiedi l\'arco come evocazione puoi infliggere 1 danno entro distanza 1 invece di muoverti.',
    },
    {
        name: 'seastrident',
        label: 'Tridente dei Mari',
        image: require('../../assets/evocations/seastrident.png'),
        set: 'Crono',
        effect: 'Finché possiedi il Tridente ogni volta che un mago entra nella tua stessa stanza o tu entri in una stanza con un mago puoi infliggergli 1 danno.',
    },
];
