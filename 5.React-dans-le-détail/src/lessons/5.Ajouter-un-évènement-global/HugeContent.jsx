import { useEffect } from "react";

export default function HugeContent() {
  useEffect(() => {
    window.addEventListener("scroll", handleGlobalScroll);

    function handleGlobalScroll() {
      console.log("Scrolling !");
    }
    return () => {
      console.log("Nettoyage de l'écouteur");
      window.removeEventListener("scroll", handleGlobalScroll);
    };
  }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        eveniet obcaecati ducimus officia modi possimus ab autem, veritatis
        placeat fugit aperiam animi dolor amet. Vitae, earum saepe cupiditate
        numquam ad dicta vero sequi at cum nihil deserunt aspernatur blanditiis
        magnam ducimus fugiat sint quasi voluptate nostrum illum facere! Earum
        laudantium architecto ut rerum, hic aspernatur? Eveniet molestiae
        tenetur ab nam voluptas minima accusantium totam nulla laboriosam
        ratione atque aliquam maiores recusandae aliquid earum commodi
        doloremque, optio sit iusto! Impedit ipsam dolorum facere iure
        quibusdam, perspiciatis quos! Saepe in velit, maiores incidunt, illum
        quae earum impedit veritatis perspiciatis repudiandae sapiente
        voluptates ratione fugiat deleniti nostrum necessitatibus explicabo
        doloribus. Adipisci aspernatur quibusdam dolores cumque ea laudantium,
        eligendi, illo et eum natus consequuntur est. Soluta, deleniti corrupti
        hic illo repellendus saepe omnis amet esse quo, placeat voluptas vero
        alias. Ea magnam assumenda sunt doloremque ex incidunt molestiae iste
        eligendi corrupti labore dolor necessitatibus vitae praesentium ipsa
        ullam alias culpa, debitis rem. Odio fugit eligendi nobis ratione, omnis
        distinctio illum quisquam ipsa magnam laborum maiores quis voluptatum
        minima eius, inventore nihil doloremque repudiandae dolore. Ducimus
        obcaecati cum doloribus facilis, quaerat autem tempora quos sapiente
        dicta itaque quas fuga commodi atque ex dolores ratione blanditiis!
        Laboriosam numquam deleniti et voluptatibus minus earum quibusdam
        molestiae animi laborum asperiores. Quidem accusamus excepturi
        molestiae? Quibusdam reiciendis quisquam ut quod molestias assumenda
        optio magni voluptatem ratione quos? Deserunt quae officia sapiente
        sequi animi molestiae, sint tenetur eum, fugiat rerum officiis suscipit
        sit voluptates laudantium facilis rem alias, blanditiis vel. Saepe
        excepturi commodi accusamus numquam ducimus non deserunt cumque
        recusandae perferendis amet labore aut placeat, possimus nostrum earum
        error? Delectus natus nisi laboriosam placeat quidem, at ad error,
        consectetur ut cupiditate harum vel excepturi voluptates saepe beatae
        non necessitatibus, quis obcaecati enim. Tenetur, maxime. Perferendis
        aliquid ipsa perspiciatis doloribus unde. Vitae placeat sit a culpa
        similique numquam corporis fugit totam quae neque labore aspernatur iure
        deleniti nam, nihil impedit voluptates voluptas possimus quisquam amet
        voluptatibus dolorem quia. Enim, laboriosam accusamus. Explicabo at
        itaque qui. Dolores deleniti deserunt incidunt qui rerum cumque possimus
        accusamus dolore cum sint quas et quibusdam autem, ex voluptatibus unde
        expedita doloribus nobis dolorem ut corrupti illo? Adipisci vel dicta
        incidunt, quas obcaecati minima totam dolore fugit recusandae,
        exercitationem nesciunt iste labore maiores! Numquam libero dolores
        consequatur recusandae, rem quibusdam doloribus quis, nulla aspernatur
        dolorem dolorum sapiente deserunt sint. Itaque veritatis, ea asperiores
        aliquam laudantium natus temporibus nisi porro odit quas sapiente enim
        eaque quidem cumque impedit tempore corrupti quasi officia molestiae
        expedita mollitia magni saepe doloremque dolorum. Laboriosam nihil
        temporibus commodi, eveniet blanditiis maxime quaerat corporis corrupti
        eligendi quae vitae, hic officiis porro earum vero sunt unde voluptas
        explicabo. Aut similique aliquam soluta dolores quas quisquam. Commodi,
        enim voluptatem amet distinctio consequuntur sit sunt vitae dolorem
        libero, sapiente modi exercitationem iure. Blanditiis doloribus sapiente
        nam sequi ipsum, officiis nobis assumenda repellendus officia facere
        iure illo aliquam cumque quaerat optio, ducimus commodi ipsa nostrum
        temporibus perspiciatis! Sequi incidunt nobis veritatis necessitatibus
        provident, tempore nam optio dolore, dolor rerum recusandae suscipit a
        natus dolores enim! Ratione saepe eos illum aut est commodi qui libero
        accusamus provident nisi veniam odit dolore, ab repellendus ipsa
        voluptate similique quae harum culpa cumque dolorum sequi consectetur
        in! Ipsam veritatis cupiditate officiis deleniti aperiam modi earum
        blanditiis ex repellendus distinctio porro odit, molestiae consequuntur
        dolor repudiandae ab asperiores delectus aliquam deserunt, temporibus
        aliquid iste eveniet! Nisi assumenda, dolor obcaecati, omnis numquam, id
        rerum asperiores dolore repellendus magnam quod explicabo voluptas minus
        molestiae mollitia. Dolore, aspernatur itaque perferendis voluptas esse
        at consectetur incidunt sed reprehenderit, architecto ipsa aut sunt
        blanditiis hic laudantium quaerat, obcaecati magnam rem dolor tenetur
        recusandae totam voluptatem eum. Esse incidunt sunt, odio consequuntur
        eos corporis nisi quos, eveniet earum aliquid perspiciatis optio odit
        delectus. Magnam, adipisci repellendus eos sed dicta asperiores tempora
        rerum ex? Ratione fugit atque placeat debitis eaque repudiandae
        consequuntur aspernatur, soluta tempore ex ab nihil. Sed, iusto aliquid
        illum doloremque magnam iste inventore accusantium odit nisi deserunt
        repellat eius et vitae. Est voluptatibus ratione repudiandae saepe modi
        quis aliquid dicta perspiciatis sit sapiente suscipit unde dolores illo
        maxime deserunt at eius sint tempora, molestias incidunt cum! Explicabo
        obcaecati ratione eaque quo totam dolor voluptatum nulla? Ab optio quis
        ad perferendis quisquam nulla, ipsa atque accusamus, repellat nemo
        officiis iste, laboriosam nisi. Vero quos error explicabo facere
        voluptatibus rerum. Esse iusto odio commodi facilis voluptates
        voluptatibus distinctio, deserunt at quam itaque non suscipit et
        mollitia. Expedita asperiores ea praesentium nihil in quaerat officiis
        voluptates alias accusantium maxime. Facilis autem fuga, nostrum
        tenetur, nisi animi nemo quae doloremque dolorum minus voluptates odit
        quas quos ex dignissimos reprehenderit ipsam impedit facere dolorem
        officiis nobis minima. Minima incidunt cum, omnis adipisci laudantium
        cumque possimus eos dolores fugit beatae minus ipsum mollitia vero
        deserunt non iusto praesentium perferendis temporibus hic tempore dolore
        saepe architecto. Excepturi animi consequuntur ad! Illo, ex amet aut,
        voluptates distinctio, tempore quod vero ut perferendis quia consectetur
        consequatur atque quidem doloribus magni accusamus eligendi
        consequuntur! Rem harum expedita animi est consequatur, laboriosam cum
        recusandae, atque deleniti ipsam, consectetur excepturi vitae magnam
        dolores at iure velit alias nisi id aspernatur autem eligendi provident.
        Adipisci, dolorem? Deleniti fuga asperiores beatae qui aliquam eum quis
        maxime commodi obcaecati itaque autem sint nisi placeat, doloremque id,
        nulla dolorum voluptatibus officia ipsum! Laborum a at perferendis
        praesentium labore facere. Porro ex error voluptas praesentium dicta
        recusandae numquam sapiente fugit enim? Omnis, dolore maxime odit
        deleniti natus, ipsa quos corrupti veniam delectus porro eaque corporis
        architecto accusamus iusto adipisci fugiat esse soluta alias repellat?
        Excepturi vel repellendus vitae inventore, esse asperiores ipsum vero,
        delectus enim aliquid sapiente minus, deserunt reiciendis dolorum odio
        modi nihil? Dignissimos similique optio fugiat magni, ullam nostrum ex
        voluptate, est cumque laborum beatae earum officiis dolore voluptatum
        totam quaerat hic cum inventore ipsa! Excepturi, nesciunt repudiandae
        nulla quaerat amet maiores consectetur, iure a maxime sit asperiores
        magni temporibus repellendus dolorum, id ad! Ratione impedit dolorum,
        provident quisquam, hic, fugiat officia laborum laudantium dolores quasi
        fuga! Quisquam aliquid facere veritatis accusantium. Repudiandae, quos.
        At deleniti maxime, eum consectetur doloremque, tempore minus dolores
        unde vitae maiores alias sunt eos. Nam mollitia eos beatae omnis
        similique minus cum enim sequi, rem explicabo dicta inventore distinctio
        sed. Ex modi doloremque placeat perferendis. Praesentium voluptate
        possimus aliquid expedita vero iure corporis saepe debitis consequuntur,
        iste repellat placeat error a accusamus sunt reiciendis perferendis
        nulla, voluptates dignissimos doloremque deserunt quidem temporibus
        maxime culpa. Non inventore, magnam ea, facilis aperiam minima vero
        molestias commodi itaque eaque facere distinctio. Optio fugit reiciendis
        unde quod dolore officia dignissimos, quia eligendi maxime architecto
        aperiam placeat voluptates repellat perspiciatis harum beatae nemo
        asperiores, quisquam ea itaque molestias pariatur dicta omnis vitae.
        Nemo vero nostrum ex totam alias asperiores atque, consequuntur ipsum.
        Doloremque minus consequuntur in repellat neque dolor, enim nisi quia
        mollitia! Ipsum error voluptates animi in, consequuntur magni nobis
        consequatur optio voluptatem et voluptate quaerat magnam obcaecati
        inventore? Inventore architecto sint et similique nihil aut repudiandae
        mollitia neque, reiciendis dolor deserunt quisquam? Nemo sequi magnam
        excepturi adipisci eum ratione fugiat, tempore earum voluptate dolor
        autem, magni accusantium accusamus tempora placeat rerum vero repellat
        natus nihil blanditiis neque porro nobis, quae optio. Neque et
        cupiditate, repellat ab debitis accusantium odio fuga voluptatem unde
        expedita commodi cum a totam fugit nostrum fugiat dignissimos laudantium
        veritatis id excepturi natus exercitationem perferendis voluptates!
        Dolor, dolorem illo tempora veritatis, iste cumque perspiciatis
        consectetur ab molestiae numquam accusamus? Explicabo nemo voluptas
        necessitatibus, sed ratione maiores, voluptate officiis libero sunt
        veniam quibusdam exercitationem laborum aperiam quas dolor assumenda
        ipsam cupiditate. Rerum vero ea veritatis, vitae voluptatum ipsa
        sapiente quaerat voluptatibus inventore tempore doloremque
        exercitationem nemo expedita, necessitatibus quibusdam culpa, repellat
        officiis itaque illo odio voluptas repudiandae at. Dicta adipisci
        sapiente accusamus nesciunt corporis quam a explicabo deleniti, totam
        impedit culpa suscipit veritatis nihil accusantium quibusdam similique
        omnis quaerat sunt eaque aspernatur ipsum cupiditate odio. Cum, enim
        earum doloribus, in fugit laboriosam quaerat tempore minus qui iusto
        nobis autem pariatur? Iusto reiciendis repudiandae, quos cupiditate ea
        possimus nemo vel optio? Commodi repudiandae aperiam impedit ipsum
        accusantium soluta. Dolore placeat optio magnam fugit eaque aliquid iure
        assumenda consequuntur a illo rerum culpa nobis quae ipsa excepturi
        dolorem reprehenderit accusantium repellendus, aspernatur repellat, nisi
        saepe. Labore molestiae ipsam quod totam sunt perferendis at, ab autem,
        recusandae magni quaerat placeat eaque, assumenda animi exercitationem
        omnis nihil laborum ipsa ducimus. Ab minus ipsa, quos facere dolore iste
        provident aut modi inventore velit at tenetur praesentium animi corporis
        quisquam ratione itaque, accusantium, veniam sed libero vel. Et unde
        alias perspiciatis nesciunt neque, eum adipisci quos reprehenderit. Nemo
        numquam vero sed iusto fugiat aliquid, aspernatur veritatis, rem
        mollitia esse, blanditiis consequuntur voluptatem illo? Neque amet
        doloremque veritatis, autem error nemo fugiat hic tempora eos tempore
        culpa nihil accusantium facere fuga, laboriosam vero expedita
        praesentium facilis deleniti. Odit, itaque, culpa iste quas nisi
        distinctio fugit eligendi architecto obcaecati, officia ducimus alias
        voluptatibus maxime harum totam minus tempore sit adipisci cupiditate
        repellendus. Sunt repudiandae doloribus enim mollitia? Odit consequuntur
        culpa incidunt nisi ex laborum nobis deserunt eligendi delectus eos
        exercitationem blanditiis repellat, odio veniam maxime alias fuga
        pariatur sit laboriosam, unde eveniet. Qui commodi dignissimos maiores
        sunt delectus inventore ullam magnam rem quibusdam cum? Sapiente veniam
        nobis provident sint nisi eum eos asperiores dolorum harum, beatae
        perspiciatis mollitia aliquid officia molestiae magni nihil recusandae
        error a sunt neque sit voluptatem quas iure. Nulla reiciendis error
        culpa totam aspernatur ad optio. Nobis consectetur a vel dolores
        similique explicabo enim, facilis eius dolorem ex. Iusto omnis labore
        repellendus accusantium deleniti quia corporis nemo perspiciatis
        reprehenderit eligendi. Ea illo impedit dolore nobis nostrum vero vel
        totam cupiditate, dicta tempore dignissimos aut ut soluta amet
        architecto doloremque facilis repellat deserunt sequi. Minima laborum
        ullam minus fugiat enim nostrum quo alias iure. Culpa in numquam ipsum
        maxime eius labore magni quo enim, consectetur, sunt quidem, pariatur
        maiores provident? Quo nisi incidunt atque modi ex enim voluptatibus
        debitis ducimus doloremque? Eum nulla suscipit tenetur fugit, earum vero
        corrupti ad quas minus voluptas, porro tempora! Optio, porro. Harum
        beatae excepturi nobis neque. Totam amet ex quidem reiciendis nostrum
        nihil deleniti nisi tempore omnis pariatur numquam placeat porro
        repellendus labore eius odio sed officia nobis, repellat ea in natus
        minima. Repellat delectus obcaecati asperiores, maiores, quasi totam
        minima ratione deleniti consequuntur similique, impedit laborum ea ipsam
        laboriosam alias laudantium porro fuga veniam incidunt reiciendis
        corrupti? Aperiam, non, quis ut dolorem enim, aut unde deleniti
        assumenda totam fuga ad nesciunt! Ratione repellat reprehenderit cum
        necessitatibus tenetur voluptatem voluptas eligendi illo. Ad, animi
        reiciendis eligendi atque eaque commodi, architecto magnam, porro iure
        voluptas in. Quod magnam eum delectus molestiae, quibusdam, architecto
        voluptatem a autem quam cumque distinctio nostrum nihil beatae quas?
        Adipisci minima dolore aperiam commodi labore natus nihil necessitatibus
        quam ut, earum consequatur dolorem, aspernatur dicta nesciunt maiores
        totam quis provident ipsam. Suscipit, doloremque. Tempora animi,
        repellat obcaecati officiis cupiditate, error enim tempore quisquam
        nobis hic repudiandae totam commodi aut cum assumenda aliquam in
        exercitationem debitis molestiae delectus nemo. Ex, cupiditate expedita.
        Eveniet voluptate tenetur ex placeat quod quis minima, in nostrum quia
        perferendis error corporis repellendus ipsam repudiandae quae adipisci
        odit dolore quasi esse facilis similique. Dolorum ducimus tempore fugit
        nulla id qui earum, quisquam molestias, dicta reiciendis vero rem!
        Corrupti exercitationem minus ratione possimus sed enim asperiores, cum
        commodi adipisci nobis, quisquam suscipit. Nulla voluptates, voluptate a
        mollitia officia quo et velit, debitis labore eligendi atque esse libero
        assumenda veniam ex nam illo. Error repellendus deserunt modi provident
        consequatur accusantium repudiandae, illum molestiae id repellat eius
        sit maiores, quam earum vero. Sed nobis architecto unde quibusdam dicta
        aliquid quas dolore voluptatibus eum soluta? Voluptates ipsa dolor sit
        illum optio nisi adipisci? Molestias deserunt et doloribus? Alias maxime
        quas accusantium amet dignissimos perferendis quia a facilis ab, est
        repellat accusamus. Minus illo non, at nemo alias, itaque provident,
        necessitatibus omnis obcaecati aliquid delectus a nihil deserunt?
        Consequuntur velit iste ad ullam praesentium maiores porro fugiat facere
        accusantium incidunt ratione atque dolor illo consectetur repudiandae
        aperiam repellendus necessitatibus animi, perferendis nam saepe odio!
        Sapiente, reiciendis.
      </p>
    </div>
  );
}
