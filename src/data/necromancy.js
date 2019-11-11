/* eslint-disable prettier/prettier */

export const NECROMANCY_DATA = {
    id: 'necromancy',
    name: 'Necromanzia',
    image: require('../../assets/schools/necromanzia/necromanzia.png'),
    text: 'La Necromanzia è il controllo sui morti. Freddo e oscuro come il ghiaccio nero è il cuore dei maghi di questa Scuola, dimenticate il calore dei raggi del sole se osate abbracciare questa disciplina.\n\nIl solo proposito del Necromante è portare il regno della morte sul campo di battaglia, scatenando terrore e corruzione nei cuori e nei corpi di chiunque tenti di ostacolarlo. Questa Scuola ha il potere di evocare creature non-morte, costruire armi ed armature dalle ossa, mordere come vampiri ed afferrare con gelidi artigli. Il Necromante uccide lentamente ed accuratamente, ma in modo inesorabile.\n\nIl simbolo della Scuola è un Teschio Grigio, il Tristo Mietitore. Usando i poteri di questa Scuola non vi limiterete ad infliggere danni ai nemici, ma riempirete il campo di gioco con orride creature Non-morte. Inoltre, con le magie Vampiriche potrete ripristinare la vostra salute rubandola ai vostri avversari, donandogli in cambio una morte atroce. La Necromanzia può convertire i danni inflitti dalle altre Scuole, come uno zombie che infetta ciò che morde.',
    keyElements: 'Infliggere danni con le Evocazioni, Numerose creature da Evocare, Danni Diretti, Guadagnare o sottrarre Punti Potere, Conversione dei Danni',
    affinities: 'Distruzione, Illusione, Cospirazione',
    difficulty: 'Bassa',
    spells: [
        {
            image: require('../../assets/schools/necromanzia/e01.png'),
            title: 'Armatura d\'Ossa - Bone Armor',
            effect: 'Quando subisci un qualsiasi danno puoi rivelare questa Protezione: infliggi la stessa quantità di danni a chi te li ha causati. Puoi infliggere al massimo 5 danni, anche se ne hai subiti di più.',
            reverseEffect: 'Quando subisci un qualsiasi danno puoi rivelare questa Protezione: guadagni tanti Punti Potere quanti sono i danni che hai subito, fino ad un massimo di 3, anche se hai subito piì danni.',
        },
        {
            image: require('../../assets/schools/necromanzia/e02.png'),
            title: 'Codardia - Cowardice',
            effect: 'Converti fino a 4 danni sul Mago bersaglio. Seleziona fino a 4 danni, diversi dai tuoi, sul bersaglio, e convertili in danni del tuo colore.',
            reverseEffect: 'Trasferisci fino a 2 dei tuoi danni sul Mago bersaglio. Poi converti fino a 2 danni di qualsiasi colore sul Mago bersaglio (non sei obbligato a convertire i danni che hai appena trasferito).',
        },
        {
            image: require('../../assets/schools/necromanzia/e03.png'),
            title: 'Epifania - Epiphany',
            effect: 'Mischia insieme il tuo Grimorio e le tue Memorie, poi pesca 2 carte e aggiungile alla tua mano.',
            reverseEffect: 'Guarda le prime 3 carte delle tue Memorie (se non ci sono abbastanza carte, guarda quelle rimanenti), poi scegline 1 e aggiungila alla tua mano. Metti le altre in cima alle tue Memorie nell\'ordine che preferisci.',
        },
        {
            image: require('../../assets/schools/necromanzia/e04.png'),
            title: 'Speranza Evanescente - Evanescent Hope',
            effect: 'Il Mago bersaglio perde 1 Punto Potere e tu ne guadagni 2. Se il Mago bersaglio non ha nessun Punto potere da perdere, tu non guadagni nulla.',
            reverseEffect: 'Rimuovi un Non-Morto dalla stanza bersaglio: tutti i Maghi nelle stanze adiacenti a quella bersaglio perdono 1 Punto Potere. Guadagni 1 Punto Potere per ogni Mago colpito da questo effetto.',
        },
        {
            image: require('../../assets/schools/necromanzia/e05.png'),
            title: 'Scorticare - Gaze',
            effect: 'Infliggi 2 danni a tutti i modelli nella stanza bersaglio, poi converti 1 danno da tutti i modelli nelle stanze adiacenti a quella bersaglio. Infliggi 1 danno ad ogni modello a cui non è possibile convertire il danno.',
            reverseEffect: 'Infliggi 2 danni e converti altri 2 danni al Mago bersaglio. Sei costretto a convertire il danno se è possibile farlo; se non ci sono danni da convertire, guadagni 1 Punto Potere per ogni danno non convertito.',
        },
        {
            image: require('../../assets/schools/necromanzia/e06.png'),
            title: 'Morsa di Ghiaccio - Ice Grip',
            effect: 'Infliggi 3 danni ad un bersaglio entro distanza 2.',
            reverseEffect: 'Infliggi 2 danni e converti altri 2 danni al modello bersaglio. Sei costretto a convertire il danno se è possibile farlo: se non ci sono danni da convertire, il bersaglio perde 1 Punto Potere per ogni danno non convertito (se il bersaglio è un Mago).',
        },
        {
            image: require('../../assets/schools/necromanzia/e07.png'),
            title: 'Rito Oscuro - Invoke Obscurity',
            effect: 'Scegli uno dei seguenti effetti:\n1) Rimuovi un Non- Morto dalla stanza bersaglio e guadagna 2 Punti Potere.\n2) Perdi 1 Punto Potere per evocare un Cavaliere d\'Ossa nella stanza bersaglio. Il Cavaliere d\'Ossa ha le seguenti caratteristiche:',
            evocationStats: {name: 'boneknight', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 4}, {type: 'health', value: 4}]},
            reverseEffect: 'Rimuovi un tuo Non-Morto dalla stanza bersaglio e rimpiazzalo con un Cavaliere d\'Ossa. Il Cavaliere d\'Ossa ha le seguenti caratteristiche:',
            reverseEvocationStats: {name: 'boneknight', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 4}, {type: 'health', value: 4}]},
        },
        {
            image: require('../../assets/schools/necromanzia/e08.png'),
            title: 'Abbraccio dell\'Oscurità - Obscurity\'s Grip',
            effect: 'Seleziona uno dei tuoi Non-Morti e piazzalo in una stanza con un Mago. Dopo averlo piazzato il Non-morto può effettuare un attacco.',
            reverseEffect: 'Scegli uno dei seguenti efetti:\n1) Puoi scambiare la tua posizione con un Non-Morto nella stanza bersaglio.\n2) Evoca un Lanzichenecco nella stanza bersaglio. Il Lanzichenecco ha le seguenti caratteristiche:',
            reverseEvocationStats: {name: 'lanzichenecco', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 2}, {type: 'health', value: 3}]},
        },
        {
            image: require('../../assets/schools/necromanzia/e09.png'),
            title: 'Appassimento Malato - Sick Withering',
            effect: 'Seleziona un bersaglio entro distanza 2 e infliggigli 3 danni. Poi seleziona un altro bersaglio entro distanza 1 e infliggigli 1 danno. Puoi continuare a selezionare bersagli entro distanza 1 finché ci sono nuovi bersagli disponibili e infliggergli 1 danno.',
            reverseEffect: 'Converti fino a 2 danni da tutti i Maghi nella stanza selezionata e in quelle ad essa adiacenti. Ogni Mago su cui non puoi convertire danni, perde 1 Punto Potere per ogni danno che non puoi convertire.',
        },
        {
            image: require('../../assets/schools/necromanzia/e10.png'),
            title: 'Evoca Oscurità - Summon Obscurity',
            effect: 'Seleziona uno dei tuoi Non-Morti entro distanza 2. Fino alla fine del turno, guadagni 1 Punto Potere per ogni danno inflitto da quel modello, fino ad un massimo di 3 Punti Potere.',
            reverseEffect: 'Scegli uno dei seguenti effetti:\n1) Un Non-Morto nella stanza bersaglio agisce immediatamente.\n2) Evoca un Lanzichenecco nella stanza bersaglio. Il Lanzichenecco ha le seguenti caratteristiche:',
            reverseEvocationStats: {name: 'lanzichenecco', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 2}, {type: 'health', value: 3}]},
        },
        {
            image: require('../../assets/schools/necromanzia/e11.png'),
            title: 'Nebbia Traditrice - Traitor Mist',
            effect: 'Ogni Mago entro distanza 1 dalla stanza bersaglio (tutti quelli presenti nella stanza e nella stanza adiacente) possono scegliere di scartare nelle Memorie una delle loro Magie Pronte. Guadagni 1 Punto Potere per ogni Mago che sceglie di non scartare nulla.',
            reverseEffect: 'Ogni Mago entro distanza 1 dalla stanza bersaglio (tutti quelli presenti nella stanza e nella stanza adiacente) possono scegliere di scartare nelle Memorie una delle loro Magie Pronte. Infliggi 2 danni ad ogni Mago che sceglie di non scartare nulla.',
        },
        {
            image: require('../../assets/schools/necromanzia/e12.png'),
            title: 'Morso del Vampiro - Vampire\'s Bite',
            effect: 'Infliggi 2 danni ad un modello entro distanza 1. Cura 2 danni da te stesso.',
            reverseEffect: 'Infliggi 2 danni al bersaglio: se è un Mago rubagli 1 Punto Potere. I due effetti sono separati, quindi se il danno è ignorato puoi comunque rubare i Punti Potere. Se il Mago bersaglio non ha almeno 1 Punto Potere, non puoi rubare nulla.',
        },
    ],
};
