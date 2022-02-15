import "./App.css";
import "./style.css";

function PictureContainer({ pic, context1, context2, context3 }) {
  return (
    <div className="container">
      <div className={pic}></div>
      <div className="des-container">
        <div className="des">
          <p>{context1}</p>
          <br />
          <p>{context2}</p>
          <br />
          <p>{context3}</p>
        </div>
      </div>
    </div>
  );
}
function Avatiar({ name, context, type }) {
  return (
    <div className="block-coniainer">
      <div className={type}></div>
      <div className="block-des">
        <h3>{name}</h3>
        <p>{context}</p>
      </div>
    </div>
  );
}
function CoffeeType({ name, type }) {
  return (
    <div className="block-coniainer">
      <div className={type}></div>
      <div className="block-des">
        <h3>{name}</h3>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <div className="pic-container">
        <div className="title-pic"></div>
      </div>
      <PictureContainer
        pic="mid-pic"
        context1="在深夜潮濕下雨的西雅圖，有一家咖啡館，它為寂寞的人而開。"
        context2="在這裡你可以用一個故事，換取一杯咖啡。"
        context3="除了溫暖自己的內心外。也可以溫暖其他在這裡的人..."
      />
      <body>
        <div className="container">
          <Avatiar
            name="Baileys"
            context="一位妖精，和一位魅魔是男女朋友，但感情似乎出了一些問題..."
            type="block-pic_elf"
          />
          <Avatiar
            name="Myrtle"
            context="一位半獸人，在一家知名遊戲公司擔任軟體開發，喜歡一個人靜靜的喝咖啡。"
            type="block-pic_orc"
          />
          <Avatiar
            name="Aqua"
            context="一位非常害羞的美人魚，工作於研究電腦相關的職業，同時也是一名遊戲開發人員。"
            type="block-pic_murloc"
          />
          <Avatiar
            name="Freya"
            context="充滿好奇心的人類女孩，工作於新聞業，但同時對於寫作也充滿熱情。"
            type="block-pic_human"
          />
        </div>
        <PictureContainer
          pic="mid-pic_gola"
          context1="在這裡你需要的是傾聽，以及一杯適合對方的咖啡。"
          context2="依照你給的咖啡適當與否，有機會改變對方的命運。"
          context3="至於如何提供咖啡，就需要你的耐心傾聽和細心。"
        />

        <div className="container">
          <CoffeeType name="Caffelatte" type="block-pic_latte" />
          <CoffeeType name="Espresso" type="block-pic_espr" />
          <CoffeeType name="Greenteatlatte" type="block-pic_green" />
          <CoffeeType name="Midnight" type="block-pic_midnight" />
        </div>
        <div className="container_button">
          <a
            href="https://store.steampowered.com/app/914800/Coffee_Talk/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="buy">Click Here To Buy This Game</button>
          </a>
        </div>
      </body>
      <footer>
        <div>
          <a
            href="https://www.togeproductions.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="copyright">©Toge Productions</div>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
