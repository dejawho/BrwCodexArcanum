/* eslint-disable prettier/prettier */

export const FORGOTTEN_DATA = {
    id: 'forgotten',
    name: 'Dimenticata',
    image: require('../../assets/schools/dimenticata/dimenticata.png'),
    text: 'Un vero Maestro della Cospirazione ha un solo obiettivo: assoggettare le menti dei nemici.\n\nLa sua Magia è un mosaico di tradimenti, cospirazioni, bugie e sussurri. Niente può essere lasciato al caso, nessuno fugge dalla tela che questo ragno arcano tesse pazientemente, nessuno può sopravvivere alle sue trappole mortali. La Scuola è rappresentata dal simbolo astrale formato da Lune e Stella, Regina del Cielo, su sfondo viola, che simboleggia anche la corte di tutti i suoi inganni e falsità. Furti e omicidi in assoluto silenzio sono solo alcune delle spregevoli tattiche che questi maghi amano adoperare. Il Cospiratore non combatte mai in modo diretto ed in campo aperto, ma tutti conoscono e temono le sue capacità a tal punto da non aver bisogno di superflue dimostrazioni. La Scuola della Cospirazione permette ai Maghi di lanciare magie di Protezione, attivare trappole e muoversi come vento invisibile all\'interno della Loggia.Un Cospiratore risolve missioni, sottrae le missioni ai nemici e può perfino allearsi con la Rosa Nera al fine di condividerne i Punti Potere.',
    keyElements: 'Movimento, Attivazione Stanze, Trappole che Causano Danno, Furto di Punti Potere e Missione, Protezione dai Danni, Collaborazione con la Rosa Nera',
    affinities: 'Divinazione, Illusione',
    difficulty: 'Medio/Alta',
    spells: [
        {
            image: require('../../assets/schools/dimenticata/g01.png'),
            title: 'Delirio di Morte - Death Delirium',
            effect: 'Infliggi 8 danni ad un bersaglio: se alla fine del turno il bersaglio non è sconfitto, rimuovi i tuoi 8 danni. Se il tuo danno (o parte di esso) è rimosso o convertito da altri effetti, rimuovi i danni rimanenti degli 8 originali.',
            reverseEffect: 'Infliggi 3 danni a tutti i modelli in gioco che hanno su di essi almeno 1 danno di qualsiasi colore.',
        },
        {
            image: require('../../assets/schools/dimenticata/g02.png'),
            title: 'Devastazione - Devastation',
            effect: 'Infliggi 2 danni a tutti i modelli entro distanza 2 dalla tua stanza, poi converti fino a 3 danni su di essi.',
            reverseEffect: 'Tutti i Maghi entro distanza 2 dalla tua stanza perdono 3 Punti Potere. Guadagni 2 Punti Potere per ogni Mago colpito da questa Magia, fino a un massimo di 6 Punti Potere.',
        },
        {
            image: require('../../assets/schools/dimenticata/g03.png'),
            title: 'Disintegrazione - Disintegration',
            effect: 'Infliggi 7 danni ad uno sfortunato bersaglio entro distanza 2.',
            reverseEffect: 'Assegna 5 instabilit\u00e0 ad una stanza entro distanza 2.',
        },
        {
            image: require('../../assets/schools/dimenticata/g04.png'),
            title: 'Echi di Vendetta - Echo of Revenge',
            effect: 'Quando subisci almeno 1 danno puoi rivelare questa protezione. Infliggi a tutti i modelli in gioco, la stessa quantità di danni che hai subito, fino ad un massimo di 5 danni per ogni modello. Ricorda che i Maghi nelle loro Celle non possono essere colpiti da effetti delle Magie.',
            reverseEffect: 'Quando sei sconfitto puoi rivelare questa protezione. Cura tutti i tuoi danni ed evita la sconfitta. Sconfiggi il Mago che ti aveva inflitto più danni (in caso di parità scegli quale mago sconfiggere). Risolvi la sconfitta considerandoti come primo nella classifica, gli altri seguono le normali regole.',
        },
        {
            image: require('../../assets/schools/dimenticata/g05.png'),
            title: 'Eviscerare - Eviscerate',
            effect: 'Infliggi 5 danni ad un modello entro distanza 2; le Magie di Protezione non possono essere rivelate grazie a questa Magia.',
            reverseEffect: 'Sconfiggi un bersaglio entro distanza 2 se ha almeno 1 danno su di se. Risolvi la classifica usando solo il danno presente sul Mago sconfitto.',
        },
        {
            image: require('../../assets/schools/dimenticata/g06.png'),
            title: 'Infamia di Creta - Infamy of Crete',
            effect: 'Bersaglia una qualsiasi stanza, poi scegli 2 stanze adiacenti alla stanza bersaglio e rendile instabili (non puoi scegliere la Sala del Trono e la Stanza della Rosa Nera). Ignora le instabilità già presenti nelle stanze e prendi i loro segnalini per averle distrutte.',
            reverseEffect: 'Evoca l\'Infamia di Creta. L\'Infamia di Creta ha le seguenti caratteristiche:{evocationStats}Può agire immediatamente.',
            reverseEvocationStats: {name: 'creteinfamy', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 0}, {type: 'health', value: 6}]},
        },
        {
            image: require('../../assets/schools/dimenticata/g07.png'),
            title: 'Intrecci del Destino - Interwine Fate',
            effect: 'Scegli una qualsiasi stanza nella Loggia: tutti i maghi presenti in quella stanza scartano la loro Magia Rapida (pronta o rivelata). Guadagni 2 Punti Potere per ogni Mago colpito da questa magia, fino ad un massimo di 6 Punti Potere.',
            reverseEffect: 'Guarda le prime 4 Missioni dal mazzo della Luna precedente. Scegline una e completala, guadagnando tutte le sue ricompense. Aggiungi la Missione alla pila delle tue Missioni Completate, poi guadagni 2 Punti Potere.',
        },
        {
            image: require('../../assets/schools/dimenticata/g08.png'),
            title: 'Tempesta di Fulmini - Lighting Storm',
            effect: 'Infliggi 3 danni a tutti i modelli in gioco. Durante la loro prossima fase Azione, i modelli colpiti non possono muoversi; assegna un segnalino Inibizione ad ognuno di loro (lato Movimento). Possono muoversi normalmente dopo che hai giocato la tua prossima fase azione (rimuovi tutti i segnalini Inibizione).',
            reverseEffect: 'Infliggi 3 danni a tutti i modelli in gioco. Durante la loro prossima fase Azione, i modelli colpiti non possono attivare stanze. Possono attivare normalmente dopo che hai giocato la tua prossima fase azione.',
        },
        {
            image: require('../../assets/schools/dimenticata/g09.png'),
            title: 'Anima Intrappolata - Soul Entrapment',
            effect: 'Quando un Mago entra in una stanza grigia (volontariamente o no), puoi rivelare questa Trappola. Puoi rubargli 4 Punti Potere.',
            reverseEffect: 'Quando un modello entra in una stanza gialla (volontariamente o no), puoi rivelare questa Trappola. Infliggigli 6 danni; se il bersaglio è un Mago e lo sconfiggi, guadagni 6 Punti Potere. Nessun\u2019altro Mago guadagna Punti Potere da questa sconfitta.',
        },
        {
            image: require('../../assets/schools/dimenticata/g10.png'),
            title: 'Fermare il Tempo - Time Stop',
            effect: 'Puoi scambiare 2 delle tue Magie in gioco (pronte o rivelate) con 2 dalla tua mano. Risolvi immediatamente gli effetti di queste Magie, nell\'ordine in cui le hai piazzate, come se fossero entrambe due Magie Standard. Trappole e Protezioni entrano in gioco gi\u00e0 attive e si rivelano come specificato dalle loro regole. Guadagni 2 Punti Potere.',
            reverseEffect: 'Ogni Mago deve scartare nelle sue Memorie una sua Magia non ancora risolta, o non ancora rivelata (nel caso di Trappole o Protezioni). Guadagni 4 Punti Potere.',
        },
        {
            image: require('../../assets/schools/dimenticata/g11.png'),
            title: 'Crono, l\'Eterno - Crono the Eternal',
            effect: 'Perdi 3 punti potere per giocare fino a 4 carte magia dalla tua mano. Puoi rimpiazzare magie pronte o rivelate che siano sulla scheda del mago (es. puoi giocare 2 magie dalla tua mano se hai preparato 1 magia standard ed 1 rapida)',
            reverseEffect: 'Evoca Crono con le seguenti caratteristiche:{evocationStats}X è il numero di giocatori moltiplicato per 5. Quando Crono viene attivato piazza un\'instabilità su ogni stanza adiacente. Crono non puoi essere spostato o rimosso da nessun effetto',
            reverseEvocationStats: {name: 'crono', stats: [{type: 'speed', value: 0}, {type: 'strength', value: 0}, {type: 'health', value: '(X)'}]},
            set: 'Crono',
        },
    ],
};
