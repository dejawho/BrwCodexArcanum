/* eslint-disable prettier/prettier */

export const ILLUSION_DATA = {
    id: 'illusion',
    name: 'Illusione',
    image: require('../../assets/schools/illusione/illusione.png'),
    text: 'Gli illusionisti sono la follia incarnata, creano labirinti di specchi, forme d\'ombra, ingannano le proprie vittime annientandone la psiche per poi spingerle verso la morte. I Maestri della Scuola dell\'Illusione non sbagliano mai un trucco, non si lasciano mai sfuggire l\'occasione di fare impazzire i loro nemici. Non affrontano mai un combattimento in modo diretto, nascondendo le loro intenzioni omicide dietro una cortina di fumo e illusioni. Ogni scontro \u00e8 uno spettacolo in cui nessun spettatore è tenuto in disparte.\n\nTutti interpretano un ruolo nel loro macabro teatro di morte, alcuni stolti credono perfino di essere vicini alla vittoria, mentre vengono traditi dai loro sensi e cadono preda di beffe crudeli. Il simbolo della Scuola è una Maschera con due facce, che rappresenta la dualità e il fragile confine tra genialit\u00e0 e follia.\n\nL\'obiettivo dell\'Illusionista è quello di usare tutte le risorse sul tavolo da gioco e sfruttare le tattiche degli avversari a proprio vantaggio. Gli Illusionisti copiano le missioni degli altri Maghi, giocano con le loro menti rubando le evocazioni nemiche, giocano con i loro avversari come se fossero delle marionette.\n\nMolte carte della Scuola permettono di scegliere tra 2 Effetti, la Maschera Sorridente e la Maschera Piangente: la prima porta benefici all\'illusionista, mentre la seconda risulta essere la rovina dei suoi nemici.\n\nTrappole e Protezioni diventano le armi fondamentali per questa Scuola ingannatrice.',
    keyElements: 'Copia degli effetti delle altre stanze, Guadagno di Punti Potere, Innesco di Trappole, Controllo di Evocazioni e Maghi, Replica delle Magie, Creazione di costrutti per attivare le stanze',
    affinities: 'Distruzione, Cospirazione, Divinazione',
    difficulty: 'Alta',
    spells: [
        {
            image: require('../../assets/schools/illusione/d01.png'),
            title: 'Andromeda',
            effect: 'Evoca 1 Andromeda sotto il tuo controllo nella stanza bersaglio. Andromeda ha le seguenti caratteristiche:',
            evocationStats: {name: 'andromeda', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 0}, {type: 'health', value: 3}]},
            reverseEffect: 'Puoi scambiare una tua Magia in gioco, attivata o Pronta (inclusa questa), con una nella tua mano. Risolvi immediatamente l\'effetto della nuova Magia da una tua Andromeda. Se giochi una Trappola o una Protezione, entra già attiva. La Magia può essere originata da Andromeda: ma tutti i suoi effetti sono applicati al tuo Mago.',
        },
        {
            image: require('../../assets/schools/illusione/d02.png'),
            title: 'Miraggio Arcano - Arcane Mirage',
            effect: 'Scegli una qualsiasi stanza della Loggia come bersaglio: la stanza è considerata blu fino alla fine del turno. Guadagni 1 Punto Potere per ogni modello presente in tutte le stanze blu, ad eccezione del tuo Mago e delle tue Evocazioni. puoi guadagnare al massimo 4 Punti Potere.',
            reverseEffect: 'Scegli una qualsiasi stanza di un colore diverso dal blu: guadagni 1 Punto Potere per ogni modello presente in tutte le stanze del colore scelto, ad eccezione del tuo Mago e delle tue Evocazioni. Puoi guadagnare al massimo 4 Punti Potere.',
        },
        {
            image: require('../../assets/schools/illusione/d03.png'),
            title: 'Immagine Ingannevole - Deceiving Image',
            effect: 'Quando un Mago attiva una qualsiasi stanza, scegli uno dei seguenti effetti:\nFelice: la stanza non è attivata e infliggi 1 danno al bersaglio. Il mago non può girare il segnalino attivazione della stanza.\nTriste: La stanza è attivata e il bersaglio subisce 2 danni.',
            reverseEffect: 'Quando un Mago completa una delle sue Missioni puoi rivelare questa trappola, scegliendo uno di questi effetti: Felice: pesca immediatamente una Missione dalla stessa Luna. Triste: per questo turno il Mago bersaglio non può completare quella Missione. Potrà farlo nel prossimo turno.',
        },
        {
            image: require('../../assets/schools/illusione/d04.png'),
            title: 'Assassinio Fantasma - Ghost Assassin',
            effect: 'Quando subisci l\'effetto di una Magia puoi rivelare questa Protezione: conta le carte rivelate del Mago che ha lanciato la Magia:\nFelice: guadagni un numero di punti uguale al numero di carte rivelate (fino ad un massimo di 3).\nTriste: infliggigli un numero di danni pari al numero di carte rivelate.',
            reverseEffect: 'Quando subisci l\'effetto di una Magia puoi rivelare questa Protezione: conta le carte pronte del Mago che ha lanciato la Magia:\nFelice: guadagni un numero di punti uguale al numero di carte pronte (fino ad un massimo di 3).\nTriste: infliggigli un numero di danni pari al numero di carte pronte.',
        },
        {
            image: require('../../assets/schools/illusione/d05.png'),
            title: 'Dolore Illusorio - Illusory Pain',
            effect: 'Infliggi 1 danno per ogni 2 danni già presenti sul bersaglio (arrotonda per difetto). Se il bersaglio non ha danni, infliggigli 2 danni. Es. se il bersaglio ha già 5 danni, con questo effetto infliggi 2 danni.',
            reverseEffect: 'Infliggi 4 danni al Mago bersaglio: se alla fine del turno il Mago non è sconfitto, rimuovi 3 di questi 4 danni. Se sono stati gi\u00e0 parzialmente o totalmente rimossi, ignora questo effetto.',
        },
        {
            image: require('../../assets/schools/illusione/d06.png'),
            title: 'Tributo Illusorio - Illusory Tribute',
            effect: 'Quando il Mago bersaglio decide di attivare una stanza, prima che l\'effetto della stanza sia risolto, puoi rivelare questa Trappola. Scegli uno dei due effetti:\nFelice: subisci 1 danno dalla Rosa Nera, puoi attivare la stanza al posto del Mago bersaglio.\nTriste: ruba 1 Punto Potere dal Mago Bersaglio se ne ha.',
            reverseEffect: 'Quando il Mago bersaglio decide di attivare una Magia, puoi rivelare questa Trappola e far decidere al Mago se vuole cancellare l\'effetto della sua Magia (si considera comunque lanciata). Se non lo cancella, scegli uno dei due effetti:\nFelice: Guadagni 1 Punto Potere.\nTriste: il Mago bersaglio subisce 2 danni da te dopo aver risolto l\u2019effetto della sua Magia.',
        },
        {
            image: require('../../assets/schools/illusione/d07.png'),
            title: 'Imitazione - Imitation',
            effect: 'Quando un Mago completa una Missione, puoi rivelare questa Trappola, e scegliere uno dei due effetti:\nFelice: Guadagni la stessa quantità di Punti Potere che ha guadagnato il Mago bersaglio.\nTriste: Completa automaticamente una delle tue Missioni, guadagni tutte le ricompense e i Punti Potere per il suo completamento.',
            reverseEffect: 'Quando un Mago risolve una Magia di tipo Contingenza, puoi rivelare questa Trappola, scegliere un effetto dai seguenti:\nFelice: guadagni lo stesso ammontare di Punti Potere guadagnati dal Mago bersaglio.\nTriste: Guadagni 1 Punto Potere.',
        },
        {
            image: require('../../assets/schools/illusione/d08.png'),
            title: 'Cappello del Giullare - Jester Hat',
            effect: 'Quando un Mago entra (volontariamente o non) in una stanza blu, puoi rivelare questa Trappola: guadagni 1 Punto Potere per ogni 2 danni (arrotonda per difetto) presenti su quel Mago, fino a un massimo di 4 Punti Potere. Se il berasglio ha 0 danni, perde tutte le sue azioni Fisiche: gira i suoi segnalini Azione sul lato attivato.',
            reverseEffect: 'Quando un Mago entra (volontariamente o non) in una stanza verde, puoi rivelare questa Trappola: gioca immediatamente la Prossima magia del mago bersaglio: risolvi istantaneamente l\'effetto della Magia rivelata come se fosse originata da te. Dopo aver risolto la Magia, il Mago bersaglio continua il suo turno normalmente.',
        },
        {
            image: require('../../assets/schools/illusione/d09.png'),
            title: 'Mantello di Luce - Light Cape',
            effect: 'Quando subisci un qualsiasi danno puoi rivelare questa Protezione: devia il danno su un altro bersaglio entro distanza 1 da te. Il danno deviato diventa del tuo colore, come se lo avessi inflitto tu. Se non puoi selezionare nessun bersaglio, ignora il danno inflitto dalla Magia; subisci comunque gli altri effetti.',
            reverseEffect: 'Quando subisci un qualsiasi danno puoi rivelare questa Protezione: infliggi la stessa quantità di danni a chi te li ha causati. Se infliggi danno ad un Mago, e lo sconfiggi la classifica è risolta come se tu fossi l\'unico ad aver sconfitto il Mago. Guadagni 5 Punti Potere e il segnalino trofeo, nessun\'altro guadagna Punti Potere.',
        },
        {
            image: require('../../assets/schools/illusione/d10.png'),
            title: 'Immagini Multiple - Multiple Images',
            effect: 'Quando sei il bersaglio di una Magia, puoi rivelare questa Protezione. Scelgi uno tra: Felice: guadagni 1 Punto Potere. Triste: ignori il danno ma sei ancora soggetto agli altri effetti.',
            reverseEffect: 'Quando sei il bersaglio di una Magia ad area, puoi rivelare questa Protezione. Scelgi uno tra:\nFelice: ignori il danno e ti muovi in una stanza blu.\nTriste: infliggi lo stesso danno che hai subito al Mago che lanciato la Magia ad area.',
        },
        {
            image: require('../../assets/schools/illusione/d11.png'),
            title: 'Camminare nell\'Ombra - Shadow Step',
            effect: 'Muoviti nella stanza bersaglio blu. Se non è stato gia attivato puoi attivare l\'effetto della stanza.',
            reverseEffect: 'Muoviti nella stanza dove si trova il bersaglio selezionato. Infliggi 2 danni al bersaglio: se non è sconfitto, muovilo in una stanza blu a tua scelta.',
        },
        {
            image: require('../../assets/schools/illusione/d12.png'),
            title: 'Suggestione - Suggestion',
            effect: 'Seleziona una Evocazione entro distanza 2, poi scegli un effetto:\nFelice: L\'Evocazione agisce immediatamente sotto il tuo controllo, considera ogni suo effetto o danno come tuoi.\nTriste: muovi una Evocazione nella stanza del suo Evocatore e attaccalo con essa. Il danno inflitto è del tuo colore.',
            reverseEffect: 'Seleziona un Mago entro distanza 2, poi scegli un effetto:\nFelice: Il Mago muove di 1 passo e attacca sotto il tuo controllo, considera il danno come se fosse tuo.\nTriste: rivela la prossima Magia Pronta del Mago: se è una Magia di Contingenza, guadagni 1 PP; se è una Magia di Combattimento, guadagni 2PP. In tutti gli altri casi non guadagni nulla.',
        }],
};
