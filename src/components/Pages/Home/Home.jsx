import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaSun } from "react-icons/fa";

const Home = () => {
  const {changeTheme, darkTheme} = useContext(AuthContext);


  const handleDarkTheme = () => {
    changeTheme();
  }

  return (
    <div>
      
      <main className="">
        This is the home page... Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veritatis, iusto similique aspernatur sunt assumenda
        quasi fugit magni obcaecati ipsam in? Consequatur autem, voluptate
        laborum nostrum rem, ex non nihil magni ducimus asperiores eveniet id
        esse omnis consectetur quisquam modi porro vitae, recusandae obcaecati
        soluta provident. Quod eveniet delectus libero corrupti nostrum
        consequuntur nam, mollitia velit, distinctio blanditiis voluptate, sed
        facere nemo molestiae temporibus reprehenderit facilis dolore enim dicta
        quam inventore debitis eum. Eaque rerum consequatur ipsa iste, debitis
        dignissimos culpa sapiente minus repellendus voluptates fuga repudiandae
        vero ratione odit quia magni quam deserunt, voluptate doloremque
        incidunt commodi optio. Voluptatum molestias doloribus vel numquam?
        Error ipsum, mollitia quibusdam dolor animi voluptatibus quos! Quasi
        labore ullam distinctio natus sapiente sunt ut totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur consequuntur ratione perspiciatis ipsum praesentium cum veniam. Nisi quos voluptatibus reprehenderit ipsum laborum. Tempora doloremque fugit voluptatibus deleniti recusandae consequuntur architecto vero incidunt repudiandae, perferendis omnis odio officia nihil necessitatibus iusto possimus reprehenderit dolore facere id? Inventore, asperiores. Nobis commodi eos illum error optio harum. Repellat nihil velit, voluptas fuga voluptates maxime ex libero, vitae temporibus numquam accusantium. Maxime dolorum distinctio harum possimus ducimus modi vero alias nihil iste similique accusantium porro ipsum deserunt beatae asperiores quasi magnam delectus quis optio recusandae, molestias sunt? Quod minima mollitia harum nostrum tempora. Pariatur, beatae vel. Enim sint repellendus expedita fugiat deleniti impedit laboriosam esse modi nemo nesciunt dolorum quasi nostrum ullam voluptatum sapiente dolores aliquid fugit, quae consectetur voluptatem quam perspiciatis tempora exercitationem ducimus. Porro tempore recusandae reiciendis corporis sed illum dolorum eaque iusto molestiae, possimus enim totam quaerat placeat voluptatibus! Alias dolor nostrum excepturi officia? Dolorum quasi eaque laborum suscipit fugit? Consequuntur perspiciatis repudiandae ipsa voluptas repellat esse obcaecati deserunt illo doloremque incidunt officia doloribus, accusamus ipsum quam qui! Consectetur eaque expedita, eius debitis architecto mollitia eum magni, aperiam incidunt error asperiores? Et aliquid repellat quibusdam ea quos? Magni provident, nobis nam hic neque, dolorum incidunt aliquam, exercitationem quaerat quidem eos fugit rerum quas repudiandae iure animi voluptatum mollitia fugiat quibusdam asperiores sapiente architecto modi! Quod qui facere excepturi ducimus, eius consequuntur esse vitae architecto tenetur, modi natus. Hic fugit ab expedita dolorum nihil nesciunt doloremque, quas accusamus sed illo suscipit nemo, doloribus quo ducimus voluptates recusandae quidem, a vitae? Itaque voluptatum eum soluta necessitatibus omnis. Saepe quas similique quos, sequi perspiciatis doloribus itaque odio debitis, repellat laudantium doloremque? Eveniet quod facilis ea illo explicabo ipsam blanditiis magnam, possimus sunt totam, cumque officiis soluta exercitationem aliquam id aut quia fugiat maiores? Beatae aperiam ullam repellendus? Culpa quas minima sapiente quam vel. Accusantium incidunt reiciendis, dolore corrupti nulla minus adipisci maxime blanditiis deserunt ratione magni architecto corporis alias, aut velit porro illo laborum et, expedita sint dolorum! Consectetur debitis odio quas maxime ipsa facilis numquam voluptate illum, iure neque unde! Repellendus qui earum deleniti iusto vitae aut fuga optio dolores rerum, eveniet ipsum perferendis atque modi quo consectetur ratione doloremque. Laborum quod qui recusandae dicta quis error quasi inventore in voluptatum aspernatur nesciunt dolor explicabo quae, vel necessitatibus minima labore deleniti! Fugiat quibusdam dicta dolorum, ad saepe accusamus, sapiente enim esse itaque iure, magnam ipsum corporis. Quam, eveniet optio beatae, inventore enim sequi error nobis explicabo quos, minus aliquid. Eligendi distinctio atque eum quia nemo dicta totam aspernatur laboriosam, veniam nam inventore laudantium aliquid! Expedita in dolor explicabo cum. Dignissimos non totam et adipisci, porro ab rerum dolores odit culpa impedit modi minima quos nemo facere rem sint voluptatum laborum nihil ducimus, provident, dolor delectus error! Recusandae, ab fugit soluta nulla in inventore repudiandae voluptates fugiat. Quidem harum sed quod rem eum fugit atque delectus eaque alias fugiat minus quaerat reprehenderit voluptate, iste ipsa, ex autem porro? Assumenda, possimus. Maxime, obcaecati! Dolor, iste?

      </main>
        <div className="fixed z-50 bg-[var(--clr-primary)] rounded-full text-[var(--clr-light-gray)] p-3 right-10 top-[90%] text-xl" onClick={handleDarkTheme}>
          {darkTheme? <FiMoon /> : <FaSun /> }
        </div>
    </div>
  );
};

export default Home;
