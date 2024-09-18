import { useEffect, useRef } from "react";
import "./Container.css";

export default function Container() {
  const newsletterRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        newsletterRef.current.classList.add("active");
        observer.unobserve(newsletterRef.current);
      }
    });
    observer.observe(newsletterRef.current);

    return () => {
      observer.unobserve(newsletterRef.current);
    };
  }, []);
  return (
    <div className="container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae
        repellat temporibus animi dolorem unde, assumenda rerum enim inventore
        accusantium facere. Repudiandae iusto at fuga quis quaerat tempora
        dignissimos ipsum perspiciatis similique? Veritatis eaque qui laudantium
        porro aperiam, voluptatum atque dolore obcaecati commodi quam
        repudiandae nobis id magnam, sit officiis cum. Reprehenderit corrupti
        placeat nam maiores velit odit exercitationem fuga amet doloribus
        consectetur rem laboriosam ad similique soluta, repellendus magnam,
        ipsam perferendis ratione architecto provident minus! Culpa iste ipsum
        magni voluptas dolores laboriosam aliquid exercitationem quia odio,
        dolorem possimus aspernatur explicabo sit repellendus totam magnam
        officiis quam, quo, cupiditate ipsam? Inventore a architecto minima ab,
        voluptatibus iusto fugit repellat exercitationem suscipit ducimus,
        praesentium placeat deleniti quos iure doloremque ea voluptatem enim
        nulla quaerat minus quod ipsum voluptas. Nam mollitia, saepe adipisci
        beatae animi officia minus ipsam tenetur ad cupiditate deleniti repellat
        illum! Tempora asperiores ipsam officia ducimus, ab sequi sit similique
        vitae reprehenderit? Explicabo iure voluptates beatae quasi animi
        adipisci repudiandae atque numquam laudantium, eaque enim doloribus
        blanditiis recusandae aliquam, quia ullam qui obcaecati! Sit itaque,
        officiis earum tempore excepturi ab labore consequuntur deserunt impedit
        quae similique quasi necessitatibus ullam facilis. Aliquid nisi, modi
        natus provident dolorem amet laudantium, necessitatibus nam a ad,
        laborum molestias! Culpa dolorem incidunt numquam cum ratione
        temporibus? Assumenda doloribus corrupti maiores tempora cumque, dicta
        expedita voluptatem incidunt natus officia animi, eveniet quod saepe
        obcaecati eius nisi delectus cum reiciendis. Deleniti dolorem quasi quod
        voluptates at non magnam, fugiat soluta odit, eaque enim est error alias
        accusantium repudiandae in, maiores repellat voluptate sapiente nam ab!
        Impedit porro suscipit quaerat odio! Asperiores quisquam enim saepe
        atque quas dolore, suscipit facere ullam necessitatibus vero aliquid et
        voluptates ab qui corrupti, sequi ipsum tenetur quae veritatis quidem
        illum omnis delectus? Deleniti, itaque eos, perspiciatis ex ullam aut
        fugit doloribus tenetur sequi exercitationem molestiae nulla recusandae
        sunt sint tempore libero quod atque saepe dolor consectetur obcaecati
        repellat accusamus ea! Ipsum vitae impedit cupiditate quasi assumenda
        esse, nulla iure voluptatum nisi sequi alias iusto perferendis mollitia
        unde et quisquam voluptatibus aperiam id ex possimus nostrum nobis
        tenetur necessitatibus. Mollitia, deleniti ipsum. Sapiente aliquid natus
        quisquam, maxime sunt, dolorem debitis assumenda fuga accusantium
        excepturi ut vel quas. Quibusdam possimus voluptatibus dolorum,
        dignissimos dolor saepe commodi quidem, repellat eligendi voluptas at
        veniam eos iure inventore unde? Delectus tempore nemo non neque corporis
        consequatur vero dolorem enim sit cumque velit maxime, beatae natus
        iusto laborum consectetur doloribus dicta voluptate sapiente,
        exercitationem ut! Ea sed nemo unde numquam. Itaque quaerat corporis eum
        architecto vel. Ipsa iste libero at rem exercitationem obcaecati eos
        unde voluptate recusandae similique dolores, nulla quos perspiciatis,
        veniam maxime hic porro explicabo velit illum dicta quo eligendi non et?
        Magnam deserunt tempore officiis aspernatur, ad dolorem nisi in minus
        laboriosam. Accusantium harum dolorem beatae eligendi vitae dignissimos
        vero natus, dolor corrupti, impedit, consequuntur repudiandae itaque
        recusandae amet omnis. Quia, magnam maxime! Minus blanditiis a id quas
        illo ipsa, ratione quis ipsam corrupti. Et architecto sit, odio, quos
        amet rem magni illum reiciendis non harum laborum pariatur provident
        quas minus ad quo nemo! Natus quis velit harum numquam nesciunt
        distinctio beatae, ipsam ex at? Odio unde eveniet consequuntur. Eos
        laborum cupiditate tenetur blanditiis quae, velit sequi atque nobis, vel
        voluptatibus beatae quaerat molestiae, totam in quis accusantium nemo
        distinctio provident amet corporis! Natus architecto, quia praesentium
        delectus at quasi! Provident ea, suscipit facilis asperiores cum
        repudiandae illo iure! Ab nam asperiores, neque veritatis perspiciatis,
        eum accusamus corporis nulla adipisci nobis, ipsa vero dicta magni
        tenetur dolorum nihil aperiam deserunt accusantium nemo. Reiciendis quia
        ex eveniet consectetur quaerat! Nam, molestias provident. Sint culpa
        ratione possimus unde aliquam itaque debitis perferendis nostrum ipsum
        explicabo in, facere ab, maxime nam quae architecto, a hic. Expedita ex
        officia fuga facere nobis id! Nemo officiis vitae laudantium commodi nam
        quaerat accusamus delectus similique ipsam rem. Quam voluptatibus
        delectus alias, omnis perferendis pariatur. Minima quaerat doloremque ex
        alias saepe odit laboriosam amet totam est blanditiis nihil, commodi
        dolorum esse facere necessitatibus enim beatae quae, recusandae,
        deserunt aliquam cupiditate. Ut, a. Amet nesciunt modi a vero, non rerum
        laudantium veniam! Asperiores at nisi neque voluptatum, eum saepe
        laboriosam, quaerat labore non exercitationem cumque cupiditate vel
        quibusdam molestiae molestias. Esse incidunt eaque id impedit ipsam
        mollitia quis, inventore, corrupti dolorum facere illo similique maiores
        iusto! Asperiores dignissimos nesciunt rerum omnis officia iste quod
        perspiciatis dolore animi, eligendi tempora eaque facere quia voluptas
        incidunt unde nostrum. Quasi ex voluptatum aut earum quos laboriosam
        nemo soluta cum voluptates commodi reiciendis accusantium rerum vitae
        fuga, maxime culpa repellendus! Voluptate quod fuga necessitatibus
        incidunt nesciunt? Ullam amet in ut excepturi, maiores quam iusto odit
        quo vitae non voluptas nesciunt distinctio omnis placeat. Itaque, modi
        beatae? Nisi quis aperiam officia voluptatibus laboriosam omnis, earum
        minima eos est doloremque. Eos corporis ex laudantium itaque esse unde
        sapiente ducimus, dolorum ratione molestias quisquam autem officiis,
        provident animi sint deserunt voluptas porro cumque? Esse amet dolores
        quae, ab aperiam voluptate perferendis aspernatur voluptas animi
        delectus unde, cupiditate asperiores placeat. Repellat accusantium
        beatae quisquam earum eligendi sit ex sequi quae minima. Suscipit
        expedita iste quae minus neque fuga dolorum, commodi corporis doloribus
        aliquid consectetur excepturi possimus accusamus, molestias optio rem
        provident eaque eligendi. Aut magni consequatur, ipsam tempora eius
        velit reprehenderit, excepturi laboriosam veritatis, dolor voluptas
        autem qui fugit maiores ratione! Debitis eligendi dolore cum quam alias
        accusamus unde possimus fuga delectus, doloremque doloribus praesentium
        officia. Eum quam dolor nam cum? Quo, quidem nobis consectetur
        laboriosam doloribus, quam accusantium nemo consequatur laborum nesciunt
        molestiae exercitationem eaque ad. Eveniet placeat accusamus quibusdam
        quia explicabo, ducimus doloremque nobis, illum perspiciatis iusto,
        impedit sequi odit aliquid est eius? Consectetur, repellat voluptatibus
        animi optio ducimus eum. Ipsa minima mollitia architecto fugit
        aspernatur animi vel voluptatibus? Expedita repellat debitis numquam
        impedit tempora quae beatae sit deleniti iusto in delectus unde
        voluptate officiis ea illum minima ex, accusamus voluptates maxime
        necessitatibus ipsum amet reiciendis. Officia quibusdam alias sit rem
        sint, inventore earum odit a repellendus repellat quae, obcaecati dicta
        nam vero accusantium vel itaque. Aliquid quia doloremque rerum! Repellat
        quos voluptate deserunt delectus culpa dolore dolores fugiat impedit
        sint consequatur corrupti mollitia totam ad repudiandae suscipit error
        assumenda aut nobis nemo provident maiores, dolor minus itaque! Illum
        modi, nihil eum, ea est perspiciatis libero dolorem provident, impedit
        maiores quae quaerat quibusdam iure ut nemo explicabo rerum fugit
        necessitatibus blanditiis. Sequi iste officiis dignissimos sunt
        aspernatur nam aperiam qui velit nostrum. Molestiae reprehenderit eaque
        officiis provident, ea impedit rerum dolorum recusandae commodi
        adipisci, eligendi ad aliquam. Beatae eaque quod vero mollitia? Et culpa
        accusamus ratione quod est fuga ea eos esse earum atque. Modi magnam
        dicta quod sunt et excepturi odio cupiditate maiores labore
        consequuntur, eaque natus, voluptatem vel, blanditiis voluptate cum ea
        doloribus dolore. Quia facilis similique voluptates consequatur, tempora
        enim laudantium praesentium maxime voluptatibus, error quas obcaecati
        maiores, neque sunt numquam? Ex commodi tenetur blanditiis quisquam
        iusto? Eligendi labore laboriosam mollitia facere natus quidem voluptas
        quam quo quibusdam sint non illum ipsam debitis, dignissimos provident
        iste perspiciatis sequi! Necessitatibus vel est totam quas consequatur
        quod quo ducimus minima nam assumenda ipsam, fugiat, sint quasi
        veritatis eius rem quaerat. Tempore possimus aliquid obcaecati
        distinctio corporis incidunt illum porro nemo perferendis adipisci eaque
        illo dolorem debitis cupiditate impedit at officiis doloremque quibusdam
        eius, et praesentium nihil sit enim vitae. Provident hic sed alias iste
        asperiores reiciendis laborum ipsum architecto, ea similique iure
        possimus cupiditate, error veritatis veniam? Quas dolor dolores quaerat
        odio consectetur beatae numquam, corrupti ipsam porro eaque obcaecati
        nobis et quibusdam, alias veritatis aspernatur explicabo, nostrum
        inventore quisquam neque! Sit repellat libero iusto sunt sed, eos,
        recusandae veniam voluptatum consequuntur fugit, quibusdam tempore
        incidunt est temporibus alias ducimus at suscipit dolorem amet et. Atque
        architecto repellendus et, deserunt numquam harum vel quaerat quos magni
        veniam mollitia, aliquid dolorum natus perferendis! Quibusdam, fugiat.
        Delectus, fugiat numquam amet a nostrum vel exercitationem in porro sint
        ab distinctio illo sunt unde ipsa earum placeat nulla quidem? Quo
        voluptatum facilis ea delectus nam labore assumenda vitae incidunt
        reiciendis odio commodi nisi, hic quos sint cum aliquid debitis corporis
        iure excepturi molestias. Consequuntur nostrum quasi, perferendis
        inventore nam accusamus possimus beatae cumque vel ratione, adipisci non
        voluptas, ipsam sunt ipsa quod error illum odit autem. Porro quia optio
        aperiam neque voluptates ab sunt quidem omnis rerum beatae
        necessitatibus quae velit amet dicta quisquam mollitia possimus pariatur
        est, asperiores odit consectetur libero culpa? Sapiente eligendi nam
        sunt aspernatur ut quo autem perferendis, velit, sint facilis nihil odit
        laboriosam, provident alias nesciunt excepturi ducimus iusto qui
        distinctio. Fugiat molestiae placeat ullam. Nostrum quia temporibus
        earum odit, fugiat, magnam quo deserunt voluptatibus necessitatibus iure
        nihil, ratione minus! Nam architecto id ipsam asperiores dolor!
        Praesentium natus, tempore rem eveniet laboriosam magnam, velit quam sit
        illum nulla inventore quisquam maiores numquam corrupti similique sint
        excepturi quod possimus dolorem, et laborum ex? Distinctio, enim
        voluptatum? Alias consectetur iusto eaque laudantium illo ut quisquam,
        temporibus sapiente aliquam maxime perspiciatis iste, libero repellendus
        ad modi esse a non quae et odit illum laboriosam? Illo enim dolores
        cumque ea!
      </p>
      <div ref={newsletterRef} className="newsletter">
        <h2>Observed element !</h2>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus facilis
        fuga magnam autem dolorem similique eaque maxime consequuntur! Odio
        praesentium veritatis, quae, suscipit natus consectetur, iusto labore
        tenetur dolorem repellat nulla dolores. Laudantium possimus quam a
        ipsum, voluptatum suscipit facere quis voluptate veniam consequuntur
        harum maxime quibusdam, cum, eius provident. Modi molestias neque nulla
        vel vitae! Ipsam, debitis voluptatibus. Quas voluptatum nisi omnis ipsam
        repellendus quae, unde corrupti aliquid eum saepe id, neque dicta
        repellat accusantium dolor ut corporis eveniet. Ad neque non dolores
        praesentium velit voluptatibus itaque, eum corrupti at aperiam molestiae
        incidunt excepturi sapiente ducimus earum quisquam dolor iure officia
        corporis quos aspernatur. Esse quo voluptatem, tempore saepe molestias
        perspiciatis autem eligendi ducimus nobis laborum? Odio provident amet
        rem. Tenetur beatae doloremque ad deserunt aperiam, dolorum animi
        distinctio nemo quidem, blanditiis nulla id natus eius tempora
        voluptatem culpa amet consectetur fugit praesentium! Cum, magnam?
        Maiores repellendus architecto veniam tempora ipsam consequatur, fuga,
        laborum doloremque asperiores blanditiis a. Ipsam, error quibusdam
        tempore sed, soluta pariatur consequuntur iusto qui voluptate, numquam
        facere tenetur ullam. Sunt dignissimos laborum molestiae quod beatae
        doloremque, accusantium architecto maxime blanditiis tempora. Dolorum
        quae accusantium molestiae magni dolores molestias corporis vitae esse
        eligendi sint saepe, voluptates odio obcaecati in tenetur atque sed
        exercitationem unde, quisquam aperiam animi. Quisquam numquam, autem
        excepturi ducimus ipsa earum distinctio aliquid ab explicabo!
        Dignissimos, ratione velit facere eos quam voluptates tenetur deserunt
        quisquam officia tempore possimus unde. Eum, iste eveniet dolor delectus
        ab impedit quas maiores est placeat a? Minus quidem saepe soluta
        maiores. Voluptatum laboriosam, itaque dignissimos accusamus perferendis
        cupiditate recusandae nam mollitia ullam culpa, excepturi labore
        repellendus repellat, eveniet saepe! Reiciendis consequatur laudantium
        quas facilis id repudiandae obcaecati doloribus aliquid unde quisquam
        illum, voluptatem sit dolorem, numquam vel, ducimus ad asperiores odio
        explicabo cum dignissimos exercitationem necessitatibus accusantium.
        Optio voluptates cum dignissimos labore temporibus nam rem voluptate
        quas quisquam explicabo asperiores reprehenderit iure, quod velit
        veritatis necessitatibus veniam odio dolores corrupti debitis
        repellendus dolorem quibusdam eius laborum. Voluptatem, explicabo.
        Incidunt in, ullam explicabo similique blanditiis molestias corporis!
        Nobis voluptate dolor cum nisi consequuntur nemo laboriosam amet
        assumenda odio dolores ipsum perspiciatis, iste veritatis nihil magnam
        neque voluptatum? Ex magni veritatis voluptatum quos accusamus quo,
        aliquid ab illo suscipit exercitationem? Assumenda quisquam, nihil
        eveniet minima alias aliquam et expedita reiciendis, totam odit minus
        iste eum nostrum, voluptas rem veritatis iure reprehenderit quis
        quibusdam. Explicabo quibusdam doloremque minus alias veniam aliquid
        commodi voluptatem facilis distinctio, labore architecto id quaerat,
        quod harum blanditiis omnis eius! Vel sed temporibus corporis. Veniam a
        qui aliquid, delectus, labore fugiat eum adipisci, ea et iste itaque nam
        perferendis molestias perspiciatis blanditiis quas nesciunt
        exercitationem porro praesentium deserunt? Officia saepe, nam sed soluta
        in adipisci at cumque accusantium eos corporis consequatur velit,
        praesentium dolorum omnis odit, nulla hic tenetur. Dignissimos
        laboriosam totam magni a qui, tenetur rem corporis expedita alias quas
        temporibus error iusto vitae sed perferendis placeat quae quos
        assumenda, modi voluptatem magnam. Voluptates odio explicabo nihil quas
        rem numquam asperiores molestias repellendus atque vitae sit adipisci
        libero saepe cumque, illum ipsa quos harum distinctio quis iusto et
        molestiae, nemo blanditiis? Enim, perspiciatis tempore repudiandae
        ratione quia ea repellat perferendis consequatur debitis vel similique
        aliquam tenetur officia eius est asperiores, dolorem facilis ut pariatur
        quo sequi. Illum earum odit aut nulla quis, eos repellendus voluptates
        eveniet velit hic reprehenderit! Recusandae delectus voluptates fuga id?
        Soluta eum ab perspiciatis molestias amet, quidem quae, similique
        explicabo repellendus obcaecati incidunt alias voluptates facilis, iste
        fugit distinctio reprehenderit hic eius ratione nesciunt. Alias
        praesentium vitae fugit id assumenda! Minus, maiores aliquid labore
        cupiditate illo, optio ullam nostrum perspiciatis asperiores voluptates
        obcaecati animi amet adipisci atque in odio dicta architecto recusandae
        quos tempora numquam pariatur rerum possimus? Assumenda, iure illo
        doloribus enim est hic quo quod repellendus vitae quaerat! Ex
        repellendus veritatis, exercitationem iure ipsa a eaque debitis ullam
        illum veniam excepturi voluptatibus nulla, esse eum voluptatum optio
        voluptas culpa! Cum, qui. Illo inventore vitae, rerum molestias
        architecto perferendis minus enim ducimus dolores, ab modi unde!
        Accusantium, sed. Dolor mollitia facere eveniet voluptates adipisci
        repellendus, consectetur autem! Libero, quidem? Non unde impedit
        cupiditate nihil aliquam saepe, repellendus quae magnam voluptatum eum
        tenetur reprehenderit corrupti, nemo rerum aut tempore a et ea? Ut
        optio, nesciunt nemo culpa omnis voluptas officiis animi quod ullam
        dignissimos quos? Possimus, dolores. Commodi odio quidem impedit
        reprehenderit, facere corrupti nostrum voluptatum mollitia maiores
        laboriosam voluptas assumenda quibusdam possimus numquam sed inventore
        sit ab dolore vel atque expedita officiis incidunt tempore unde? Fugiat
        in placeat a sint similique.
      </p>
    </div>
  );
}
