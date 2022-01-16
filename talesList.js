// PER AGGIUNGERE UN RACCONTO:
// 1) Vai su https://wordhtml.com/ e converti il testo del racconto da word a html
// 2) in questo file aggiungi un oggetto alla lista seguendo questo schema:
//
// [
//     ... 
//     {
//         title: "titolo del racconto",
//         text: "testo in formato html",
//     },
//     {
//         title: "titolo del racconto",
//         text: "testo in formato html" 
//     },
//     ...
// ]
//
//  NOTA: se lo aggiungi sopra apparirà come primo della lista (migliore opzione)
//
// 3) crea una copia della cartella di un altro racconto nella stessa posizione
// 4) rinominala col titolo del racconto UGUALE, ma senza spazi e rispettando le MAIUSCOLE
// 5) nel file index.htlm dentro alla cartella, cambia il titolo
//    del racconto con quello del nuovo racconto (scritto normalmente)
// 6) ricarica la home del sito per controllare che il racconto sia stato aggiunto
// 7) vai sulla pagina del nuovo racconto per controllare che sia stata creata 


const talesList = [{
    title: "Quel vecchio delfino di peluche",
    text: `<p>&laquo;&Egrave; solo una perdita di tempo! Non intendo pagarla per tutto questo!&raquo;&nbsp;</p>
    <p>Faccio appena in tempo ad urlare la mia frustrazione alla psicologa che la porta si chiude e piombo nel buio pi&ugrave; totale. Dio che fastidio! Ho mille impegni che richiedono la mia attenzione, e invece sono qui a sottopormi agli esperimenti
        di quella ragazzina che crede di potermi insegnare a vivere solo perch&eacute; si &egrave; appena presa una laurea. Cosa ne sa lei del mondo? Come si permette di venire a fare la morale a me, io che ho dato tutta me stessa per mio
        figlio? Lei predica tanto, ma tra qualche ora il suo lavoro finisce e lei torna alla sua vita normale.</p>
    <p>Il mio lavoro, invece, non finisce mai.</p>
    <p>Il proiettore sopra di me si accende e un fascio di luce d&agrave; vita al grande telo disposto sulla parete. Per quanto mi secchi terribilmente dare corda alla psicologa, almeno poi mi lascer&agrave; in pace. Potr&ograve; finalmente dire
        alle insegnanti che ho seguito il loro consiglio, e magari smetteranno di ficcare il naso nei miei affari e si limiteranno a fare in silenzio il lavoro per cui sono pagate.</p>
    <p>Per cui IO le pago!</p>
    <p>Il video finalmente inizia. &Egrave; stato girato da una certa &ldquo;National Autistic Society&rdquo;, roba inglese, e vecchia per giunta visto che risale al 2016. Grazie alla luce del proiettore vedo che poco pi&ugrave; avanti ci sono
        delle poltroncine e un tavolo, tanto vale mettersi comodi. Ah, in realt&agrave; dura meno di due minuti questo teatrino, meno male. Una breve presentazione spiega che il video parler&agrave; di un bimbo che va al centro commerciale
        con la madre, e mi viene in mente che potrei andarci anche io con Tommy, magari gli prendo un bel gioco nuovo se stasera fa bene i compiti.</p>
    <p>Nella scena iniziale, il bimbo ha proprio in mano un piccolo dinosauro cui sembra molto affezionato. Carino come effetto, mostrano l&rsquo;ambiente dal punto di vista del ragazzino, per cui non posso vederlo in faccia. Hanno addirittura
        simulato le palpebre che sbattono. Il bimbo entra nel centro commerciale, e la luce lo acceca, tanto che ora vede sfocato. Subito si gira verso la mamma. Anche Tommy lo fa quando lo porto in un posto nuovo. Certo probabilmente lo fanno
        tutti i bambini, mica solo quelli autistici!</p>
    <p>Mentre il bimbo cammina, moltissime immagini mi investono. &Egrave; incredibile perch&eacute; sembra di guardare gli eventi attraverso una lente che possa ingrandire i dettagli, soffermandosi in maniera quasi ossessiva. Il ragazzino passa
        accanto ad una cabina automatica per le foto e viene accecato dai flash che provengono da l&igrave;, poi si sofferma sui lacci delle scarpe dell&rsquo;uomo che vi &egrave; dentro; un&rsquo;altra persona sistema alcuni articoli in un
        carrello, il rumore che fa &egrave; assordante! Mi riempie le orecchie e mi d&agrave; perfino fastidio.</p>
    <p>&laquo;Ehi! Abbassi il volume!&raquo;, ma naturalmente tra i rumori del video e la porta chiusa sicuramente la psicologa non mi sente. Eppure mi pareva che all&rsquo;inizio l&rsquo;audio fosse normale.</p>
    <p>Il bimbo, trascinato dalla mano della mamma, continua ad avanzare in questo mondo per lui totalmente nuovo e sconosciuto, sembra un film dell&rsquo;orrore. Vengo inondata da decine di immagini simultaneamente e non riesco a collegarle
        l&rsquo;una con l&rsquo;altra, come fossero tutte slegate e totalmente prive di senso. La visuale gira troppo velocemente, salta da un punto all&rsquo;altro senza ordine, accecandomi con colori forti e ingrandimenti inappropriati;
        ambiente e persone cambiano senza logica, n&eacute; vengono rispettate le normali tempistiche con cui l&rsquo;occhio gira. Non riesco bene a capire come sia l&rsquo;area del centro commerciale perch&eacute; &egrave; inquadrata a sprazzi
        troppo vaghi e discontinui.</p>
    <p>Mi agito. Non so perch&eacute; dannazione, in fondo &egrave; un trucco del regista. Inevitabilmente mi chiedo come sia ricevere cos&igrave; tanti input in pochi secondi senza avere la struttura mentale sufficiente a catalogarli in fretta.</p>
    <p>Infatti ora il bimbo ha il respiro affannato.</p>
    <p>Sento il suo cuore battere pi&ugrave; veloce, come fosse affiancato da ansia e panico personificati che lo stringono senza lasciarlo andare. Magari vorrebbe fermarsi e riposare la mente, guardare il suo solito conosciuto caro dinosauro
        ma non lo lasciano proprio andare.</p>
    <p>La mamma non lo lascia andare.</p>
    <p>Delle monete cadono a terra da un punto sfocato e fanno un rumore assordante, che riverbera e rimbomba e si amplifica, poi riflettono la luce e mi feriscono gli occhi. Palloncini, un uomo sorride, verde, paillettes, una signora che spruzza
        un campione di profumo; ora sono in piedi anche io e sento di star sudando sotto al mio bel maglione pulito.</p>
    <p>Poi il bimbo si guarda le mani, e inizia a contare.</p>
    <p>S&igrave;, bravo, grazie, dammi tregua! Non guardare pi&ugrave; in giro! No, fermo, continua a contare! Si &egrave; bloccato perch&eacute; davanti a lui c&rsquo;&egrave; una parete.</p>
    <p>Non guardare, continua a contare!</p>
    <p>Ma lui &egrave; curioso, come tutti i bambini sono in tenera et&agrave; e come noi spesso dimentichiamo di dover essere. Alza gli occhi e vede tanti schermi che mostrano settori del centro commerciale, immagini veloci che si susseguono
        ripetutamente, ora si fondono, poi sbiadiscono. La gente si gira a guardarlo, chi perplessa, chi&hellip; <em><em>schifata</em></em>?</p>
    <p>Con il fiato sospeso, in piedi vicinissima al telo, guardo il punto di vista cambiare. Mi sposto un pochino, perch&eacute; con il mio corpo sto facendo ombra sul telo. Ora la telecamera inquadra uno spiazzo centrale del centro commerciale.
        I clienti passano, intenti nei propri affari, si girano a guardare questo bimbo capriccioso che fa di tutto per sfuggire alla presa della madre, che a sua volta cerca di richiamarlo e trattenerlo.</p>
    <p>Non &egrave; giusto! Vista cos&igrave; la scena sembra che sia un bambino disobbediente, ma vuole solo proteggersi! Non guardatelo cos&igrave;, non sapete niente!</p>
    <p>Poi il bimbo parla. Dice di non essere un bambino cattivo, ma che a volte riceve troppe informazioni e si sente la testa esplodere.</p>
    <p>Il video finisce, lo schermo si fa nero e compare il titolo &ldquo;Riesci a guardare fino alla fine?&rdquo;, ma senza dargli importanza gli volto le spalle e furibonda mi getto nella sala accanto come un&rsquo;onda oceanica impazzita.</p>
    <p>&laquo;Cosa significa tutto questo? Crede che io pensi che mio figlio sia cattivo? Io so benissimo quello che vede! So quello che prova!&raquo;</p>
    <p>La psicologa mi guarda con occhi molto severi, quasi mi stesse giudicando. Il bel volto &egrave; cristallizzato in un&rsquo;espressione grave, e con egual tono mi parla tutto d&rsquo;un fiato, cos&igrave; che io non possa interromperla:
        &laquo;Suo figlio non ha le strutture mentali sufficienti a catalogare informazioni con sequenzialit&agrave; logica. Appoggio l&rsquo;invito fattole dallo psichiatra che segue suo figlio, convengo che l&rsquo;uso di farmaci che plachino
        il suo iperattivismo lo aiutino ad evitare i blackdown epilettici, dovuti ad un surplus di informazioni insostenibile per il cervello e che causano una parziale perdita di dati&raquo;.</p>
    <p>Parla come si stesse riferendo ad un malfunzionamento di sistema di un computer, e questa cosa mi sconvolge non poco. Forse pare accorgersene, o forse semplicemente non riesce pi&ugrave; a sostenere il formalismo richiesto alla sua posizione
        professionale, sta di fatto che mi afferra le braccia e con sguardo carico di emozione mi dice: &laquo;Per l&rsquo;amor di dio signora, lo faccia per suo figlio&raquo;. Dopodich&eacute; si ricompone, e con distacco mi accompagna all&rsquo;uscita:
        &laquo;Ho tentato con questo video, non so che altro fare. Spero che ci rifletter&agrave; su, buonanotte&raquo;, e mi apre cortesemente la porta.</p>
    <p>&nbsp;</p>
    <p>Stasera il solito traffico non mi disturba, cos&igrave; come il freddo pungente che annuncia l&rsquo;arrivo dell&rsquo;inverno. Sono silenziosa, la mente svuotata sembra non riuscire a pensare a nulla. &Egrave; una situazione inedita per
        me, sempre presa da tanti impegni da organizzare e incastrare tra loro. Avrei delle commissioni da fare prima di tornare a casa, ma non mi importa pi&ugrave;.</p>
    <p>Qualcuno suona il clacson, e mi accorgo che il semaforo &egrave; diventato verde. Parto mortificata e allarmata: non &egrave; bene essere distratti quando si &egrave; alla guida. Le luci che strappano brandelli di citt&agrave; alla notte
        mi sfrecciano accanto come proiettili, e agitata penso che magari il mio Tommy le vede sempre cos&igrave;; sento lo sgommare delle ruote e lo penso amplificato e ridondante, come nel video che ho visto prima. Penso alla macchina che
        davanti a me ha inserito la freccia per svoltare, la vedo lampeggiare e mi chiedo se a mio figlio facciano male gli occhi vedendola, perch&eacute; ricordo che abbassa sempre lo sguardo quando succede.</p>
    <p>Mi sento stupida. Stupida e cieca.</p>
    <p>Quante cose ho dato per scontato? Quanti disagi ha il mio Tommy, che io ho sempre sottovalutato?</p>
    <p>Accelero, voglio arrivare presto a casa. Non mi interessa se prendo una multa, n&eacute; del pedone che vuole attraversare, oggi aspetter&agrave;, oggi tutto il mondo aspetter&agrave; perch&eacute; il mio Tommy viene prima, ho bisogno
        di abbracciarlo.</p>
    <p>Mi distraggo di nuovo: sto cercando di afferrare la miriade di pensieri che mi colpisce e ferisce, per stringerli con violenza e sopprimerli, cos&igrave; che io possa tornare ad essere padrona di me stessa.</p>
    <p>Basta sciocchezze, devo mettere un punto a questi dubbi che mi fanno vacillare: io SO cosa devo fare, lo so con precisione. Io far&ograve; in modo che Tommy impari la matematica e la geografia, che sappia leggere e scrivere, e non come
        gli altri bambini della sua et&agrave;, ma meglio ancora! S&igrave;, io far&ograve; in modo che sia bravissimo, lo seguir&ograve; passo passo, e nessuno pu&ograve; dirmi che sia impossibile. Io&hellip;</p>
    <p>Il mio cuore perde un battito.</p>
    <p>Immersa nella mia tempesta, non mi accorgo che la macchina davanti a me si &egrave; fermata.</p>
    <p>Calcolo la distanza: non riuscir&ograve; a frenare.</p>
    <p>Inchiodo violentemente sterzando a destra per non andarle addosso.</p>
    <p>Per fortuna dietro a me non ho nessuno, ma soprattutto non ci sono pedoni lungo la strada.</p>
    <p>Metto le quattro frecce e resto l&igrave;, tremante e sudata. Dio, che spavento! Che sconsiderata! Avrei potuto causare un incidente grave, so bene che non devo mettermi alla guida quando sono agitata, ma uscita dallo studio della psicologa
        mi pareva d&rsquo;esser solo seccata, nulla pi&ugrave;. Faccio dei grandi respiri e mi accosto meglio al bordo strada. Con le quattro frecce ad indicare agli altri che ho dei problemi, chiudo gli occhi: &egrave; il momento di prendere
        in mano la situazione, investire del tempo per mettere ordine.</p>
    <p>Uso il vecchio trucco di mio padre, e plasmo la mia coscienza con la forma di una cattedrale. Ora la vedo di fronte a me; mi avvicino, apro con decisione il portone e mi fermo all&rsquo;ingresso della navata principale. Alla mia vista,
        piccole problematiche di lavoro e una scaramuccia non risolta con mia sorella fanno capolino dalle possenti colonne laterali. Con un rapido gesto della mano faccio loro segno di ritirarsi in qualche angolo buio e di non seccarmi. Poi
        poso lo sguardo sulla figura nera che si staglia davanti a me, e che occupa per imponenza tutto lo spazio centrale.</p>
    <p>L&rsquo;ombra fa qualche passo avanti: vuole uscire. So benissimo che tutto ci&ograve; che esce dalla mia cattedrale evade anche il mio controllo. Man mano che la creatura si avvicina, riconosco con maggior chiarezza i suoi tanti nomi:
        paura, impotenza, rifiuto. Porta sulle spalle il peso della vergogna, la mia; l&rsquo;imbarazzo nel dire al mondo che mio figlio non ce la fa.</p>
    <p>Urlo di rabbia, non ho paura che gli altri sappiano! Non &egrave; quello il punto! Agito le mani al cielo e con ferocia carico le mie paure, correndogli contro a petto fiero.</p>
    <p>In un attimo l&rsquo;ombra mi avvolge, mi rende cieca sorda e muta, e io non ho pi&ugrave; braccia per allontanarla o gambe per scappare al riparo.</p>
    <p>Ecco che di nuovo le mie fragilit&agrave; mi immobilizzano.</p>
    <p>&nbsp;</p>
    <p>Il telefono squilla, la mia suoneria prepotente mi strappa da quella morsa orribile. Torno in me e noto di essere di nuovo sudata, mi gira la testa e ho i battiti accelerati.</p>
    <p>&laquo;P-Pronto?&raquo;</p>
    <p>La mia voce &egrave; incerta. Non ho nemmeno visto chi mi stesse chiamando. Resto con il telefono all&rsquo;orecchio per qualche attimo, prima di accorgermi che lo squillo continua: non ho schiacciato il verde, n&eacute; ho voglia di farlo.
        Poi sento qualcuno bussare al finestrino, e girandomi vedo un uomo con il volto gentile, sulle cui labbra leggo un cordiale &ldquo;si sente bene?&rdquo;. Gli sorrido ed indico il cellulare sperando di tagliare corto, e per fortuna
        &egrave; cos&igrave;.</p>
    <p>Mi sistemo il cappotto buono e riprendo le redini della mia vita. Io sono forte e con impegno e determinazione risolver&ograve; tutto.</p>
    <p>Riaccendo il motore e imbocco la solita strada, rinvigorita dalle mie ferme convinzioni.</p>
    <p>Nella fretta, ho lasciato spalancato il portone della mia cattedrale.</p>
    <p>&nbsp;</p>
    <p>Quando arrivata a casa faccio per prendere la borsa sul sedile posteriore, mi accorgo che ho la vista annebbiata e una lacrima macchia il mio cappotto.</p>
    <p>Apro piano la porta, e un rassicurante calore mi pervade. Chiss&agrave; quante volte Tommy ha tirato un sospiro di sollievo entrando in questo territorio tanto conosciuto e abituale, dove ogni cosa viene sempre rimessa nello stesso posto
        e nessuno schema &egrave; mai infranto o capovolto.</p>
    <p>Senza nemmeno togliere il cappotto e le scarpe sporche mi fiondo in soggiorno, dove vedo il mio compagno che gioca con mio figlio.</p>
    <p>Un po&rsquo; mi infastidisco perch&eacute; Tommy ha dei disturbi e quindi deve passare pi&ugrave; tempo degli altri bambini a studiare. Gli ci vuole tanto esercizio per imparare le cose. Vorrei inveire contro le insegnati che gli fanno
        fare troppe pause o compiti troppo facili, ma anzich&eacute; rovinarmi l&rsquo;umore mi godo la complicit&agrave; dei miei uomini.</p>
    <p>Luca sta mostrando a mio figlio il disegno di un cane. &Egrave; una scena familiare molto intima e bella. Probabilmente mi sono sbagliata: la psicologa crede che la situazione sia pi&ugrave; grave di ci&ograve; che realmente &egrave;.
        Non la biasimo, n&eacute; sono arrabbiata con lei. In fondo, si &egrave; spesa molto per me e mio figlio, ha dimostrato un sincero interesse che va oltre il semplice impegno professionale: poteva semplicemente darmi la diagnosi, senza
        preoccuparsi che io capissi fino in fondo. Domani andr&ograve; da lei, la ringrazier&ograve; e le spiegher&ograve; che per&ograve; Tommy ha solo qualche problema a concentrarsi, e le crisi epilettiche sono state un caso isolato. Quel
        bimbo che ora sta sorridendo al mio compagno non pu&ograve; presentare un grave caso di autismo.</p>
    <p>Poi Tommy guarda il cane con quel suo volto cos&igrave; ingenuo e innocente, e incuriosito chiede al patrigno: &laquo;Perch&eacute; non abbaia?&raquo;.</p>
    <p>E il mondo mi crolla addosso.</p>
    <p>Mentre guardo Luca spiegargli che non &egrave; un cane vero, penso che non gli far&ograve; fare i compiti stasera, e non gli prender&ograve; nemmeno un gioco nuovo.</p>
    <p>Penso rester&ograve; qui, in piedi dietro di loro. Non voglio rompere quel dolce momento.</p>
    <p>&nbsp;</p>
    <p>A distanza di quattro anni, sette psicologi e due psichiatri, posso dire con certezza di aver capito quella sera come, tutto sommato, Tommy preferisca il suo vecchio delfino di peluche, cui ho dovuto rammendare le pinne ben due volte.</p>
    <p>Quello fu l&rsquo;inizio.</p>
    <p>Naturalmente non sono riuscita ad accettare le cose dall&rsquo;oggi al domani. Il cambiamento &egrave; lento, tanto pi&ugrave; se ci &egrave; richiesto di cambiare il modo con cui vediamo il mondo, poich&eacute; le convinzioni che abbiamo
        sono ci&ograve; che ci permette di avanzare senza barcollare nella tortuosa strada della vita.</p>
    <p>Quella sera, sono inciampata un po&rsquo; pi&ugrave; di altre volte. Un pensiero mi distraeva dal monitorare il giusto susseguirsi dei piedi a terra: e se la madre di quel bimbo non lo avesse trascinato avanti? E se si fosse accorta del
        suo dolore e lo avesse riportato a casa?</p>
    <p>Con tempo e appoggio, ho capito di dover fare un passo indietro. Ho capito che, forse, non era Tommy ad aver pi&ugrave; bisogno d&rsquo;aiuto.</p>
    <p>Forse, per sostenerlo al meglio, dovevo prima farmi aiutare io.</p>
    <p>&nbsp;</p>
    <p>L&rsquo;orologio segna le quattro meno dieci, tra poco devo andare a prendere Tommy a scuola. Sono un po&rsquo; agitata perch&eacute; &egrave; iniziata una nuova avventura per lui, in un ambiente sconosciuto e con volti che non ha mai
        visto. Finisco di mettere ogni cosa al suo posto e prendo il cappotto.</p>
    <p>Mi fermo con la mano sulla maniglia, mi &egrave; venuta in mente una cosa: Tommy avr&agrave; bisogno di qualcosa di familiare e rassicurante dopo un giorno tanto intenso e pieno di emozioni.</p>
    <p>Prendo quel miracoloso, vecchio e orribile delfino di peluche e volo fuori da mio figlio.</p>`
}, ]