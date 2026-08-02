<template>
  <div class="about" id="header">
    <div class="dimmed"></div>
    <main>
    <div class="visual">
        <div class="sns">
          <span class="sns-title" data-aos="fade-down" data-aos-delay="500">Follow us</span>
          <!-- <a href="" aria-label="밴드"><band class="btn-band" /></a> -->
          <a href="https://band.us/n/aca9AfC9b4P1U" aria-label="밴드" class="btn-band"></a>
          <a href="https://youtube.com/@tv-qi4qv?si=JMgOHrTb-yUilbEm" aria-label="유튜브" class="btn-youtube" ></a>
        </div>
        <div class="visual-copy">
          <div class="subtitle">녹색에너지시민촉진포럼</div>
          <div class="maintitle">다음세대를 위한 지속가능한발전<br>녹색에너지운동이 함께합니다!</div>
          <div class="text-guide" @click="downBtn">scroll down</div>
        </div>    
        <nav class="quick">
          <ul>            
            <li><a href="#header" :class="{active: isStart}" @click="chk00()">Start</a></li>
            <li><a href="#block1" :class="{active: is01}" @click="chk01()">01</a></li>
            <li><a href="#block2" :class="{active: is02}" @click="chk02()">02</a></li>
            <li><a href="#block3" :class="{active: is03}" @click="chk03()">03</a></li>          
            <li><a href="#block4" :class="{active: is04}" @click="chk04()">04</a></li>          
            <li><a href="#block5" :class="{active: is05}" @click="chk05()">05</a></li>          
          </ul>
        </nav>
    </div>  
    <img src="/etc/HG1.png" alt="" class="bg-img1">
    <img src="/etc/mountin.png" alt="" class="bg-img2">
    <img src="/etc/front.png" alt="" class="bg-img3">
    <div class="gradient-content"></div>    
    <section class="index-contents">
      <div class="block" id="block1">
        <div data-aos="fade-right" data-aos-delay="50">
          <h2 class="block-title">기후변화 대응을 위한 글로벌 네트워크</h2>
          <span class="block-count">01</span>
          <span class="block-subtitle">네트워크</span>  
          <p class="block-content">
            UN경제사회이사회(ECOSOC) DESA NGO Branch/ CSO 등록
            2011년 8월, 녹색에너지포럼은 UN경제사회이사회(ECOSOC)
            DESA NGO Branch와 CSO에 각각 등록하면서  UN경제사회이사회
            (ECOSOC) 특별자문 지위를 갖는 GNGO의 지위를 획득
          </p>
          <NuxtLink class="link block-more" to="/about">read more</NuxtLink>
          <!-- <a href="" class="block-more">read more</a> -->
        </div>
        <img src="/etc/ECOSOC.jpg" data-aos-delay="50" data-aos="fade-left" alt="">
      </div>
      <div class="block" id="block2">
        <div data-aos="fade-left" data-aos-delay="50">
          <h2 class="block-title">정책개선및 연구활동</h2>
          <span class="block-count">02</span>
          <span class="block-subtitle">연구활동</span>  
          <p class="block-content">
            기후변화협약대응, 생물다양성, 지속가능한개발목표(SDGs)
            달성을 위한 시민사회의 다양한 의견과 주제를 연구하며 이를
            정책의제로 설정하기 위한 활동을 진행합니다.
          </p>
          <NuxtLink class="link block-more" to="/about">read more</NuxtLink>
       </div>
        <img src="/etc/engineering_566x720.jpg" data-aos="fade-right" data-aos-delay="50" alt="">
      </div>
      <div class="block" id="block3">
        <div data-aos="fade-right"  data-aos-delay="50">
        <h2 class="block-title">녹색에너지 교육활동</h2>
        <span class="block-count">03</span>
        <span class="block-subtitle">교육활동</span>  
        <p class="block-content">
          녹색에너지체험학교와 탄소중립행사 운영 일상적인 행사에서 발생하는
          온실가스를 상쇄하는 탄소중립운동을 실천하고 있습니다. '에너지의날'과
          '녹색생활실천전국대회'를 개최하면서 생활속 '탄소중립'의 중요성을 
          강조하고 그린스타트네트워크와 함께 저탄소녹색성장을 위한 시민실천
          운동에 앞장서고 있습니다.
       </p>
       <NuxtLink class="link block-more" to="/about">read more</NuxtLink>
      </div>
        <img src="/etc/교육_566x720.jpg" data-aos-delay="50" data-aos="fade-left" alt="">
      </div>
      <div class="block" id="block4">
        <div data-aos="fade-left" data-aos-delay="50">
        <h2 class="block-title block-title-4">신재생에너지및<br /> '사랑의햇빛에너지 보급사업'</h2>
        <span class="block-count">04</span>
        <span class="block-subtitle">보급사업</span>  
        <p class="block-content">
          KBS울산방송국과 공동으로 지역의 에너지빈곤층 대상을 파악하고
          에너지빈곤층의 에너지자립을 위해 2.5KW 태양광발전을 무상으로
          지원해 에너지빈곤층 문제해결과 지역사회의 신재생에너지보급과
          지속가능한 에너지문제 해결을 위한 발판을 마련하였습니다.
       </p>
       <NuxtLink class="link block-more" to="/about">read more</NuxtLink>
      </div>
        <img src="/etc/태양광566x720.jpg" alt="" data-aos="fade-right" data-aos-delay="50">
      </div>
      <div class="block" id="block5">
        <div data-aos="fade-right" data-aos-delay="50">
        <h2 class="block-title">생물다양성및 생태계 시민과학</h2>
        <span class="block-count">05</span>
        <span class="block-subtitle">독수리학교</span>  
        <p class="block-content">
          지역울산의 생물다양성 보존과 생태계 복원을 위한 다양한 교육과
          보전활동을 진행합니다. 태화강겨울철새학교, 태화강백로생태학교,
          시민과학생태탐사, 독수리생태학교등 생물다양성보존및 복원을 
          위한 다양한 노력을 진행하고 있습니다.
       </p>
       <NuxtLink class="link block-more" to="/about">read more</NuxtLink>
      </div>
        <img src="/etc/종다양성보존운동_566x720.jpg" data-aos="fade-left" data-aos-delay="50" alt="">
      </div>
    </section>
  </main>
  </div>
</template>

<script>export default { 
  data () {
    return {
      isStart: true,
      is01: false,
      is02: false,
      is03: false,
      is04: false,
      is05: false,
    }
  },
  methods: {
    chk00 () {
      this.isStart = true,
      this.is01 = false,
      this.is02 = false,
      this.is03 = false,
      this.is04 = false,
      this.is05 = false          
    },
    chk01 () {
      this.isStart = false,
      this.is01 = true,
      this.is02 = false,
      this.is03 = false,
      this.is04 = false,
      this.is05 = false          
    },
    chk02 () {
      this.isStart = false,
      this.is01 = false,
      this.is02 = true,
      this.is03 = false,
      this.is04 = false,
      this.is05 = false
    },
    chk03 () {
      this.isStart = false,
      this.is01 = false,
      this.is02 = false,
      this.is03 = true,
      this.is04 = false,
      this.is05 = false
    },
    chk04 () {
      this.isStart = false,
      this.is01 = false,
      this.is02 = false,
      this.is03 = false,
      this.is04 = true,
      this.is05 = false
    },
    chk05 () {
      this.isStart = false,
      this.is01 = false,
      this.is02 = false,
      this.is03 = false,
      this.is04 = false,
      this.is05 = true
    },
    downBtn() {      
      window.scrollTo(100, document.body.scrollHeight || document.documentElement.scrollHeight)      
    }
  } 
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.about {
  background-color: var(--bg-color);  
  overflow-x: hidden;
  }        
  .visual {       
    height: 100vh; 
} 
  .quick {
    position: fixed;
    right: 4rem;
    top: 50%;
    z-index: 20;
    transform: translateY(-50%);  
  }
  .quick a {
    display: block;    
    text-align: right;
    padding-right: 3rem;
    color: white;
    font-size: 1.8rem;
    line-height: 4rem;    
    border-right: 3px solid var(--white-5);
  }
  .quick a.active {
    border-color: #fff;
  }   
 
  .sns {
    display: flex;
    z-index: 20;
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  } 
  .sns-title {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;    
  }
  .btn-band {       
    display: inline-block;             
    width: 2.3rem; 
    height: 2.3rem;
    background: url(/Icons/band.svg) no-repeat;     
    object-fit: fill;
  }
  .btn-youtube {    
    display: inline-block;      
    width: 3rem;
    height: 3rem;  
    background: url(/Icons/youtube-brands.svg) no-repeat;           
    
  }    
  .bg-img1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 1920px;
    animation: bg 1 3s both;
   
  }
  .bg-img2 {
    position: absolute;
    left: 0;
    top: 30rem;
    width: 1920px;   
    animation: bg 1 2s 0.5s both;
   
  }     
  .bg-img3 {
    position: absolute;
    left: 0;
    top: 56rem;
    width: 1920px;;    
    animation: bg 1 1s 0.7s both;
    
  }  
  .dimmed {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;    
    background: linear-gradient(330.24deg, rgba(11,29,38,0) 31.06% ,#0b1d26 108.93%);
  }
  .gradient-content {
    margin-top: 5rem;
    height: 700px;
    background: linear-gradient(180deg, rgba(11,29,38,0) 0% ,#0b1d26 61.38%);
    opacity: 0.6;
  }  
  .index-contents {    
    display: grid;
    gap: 8rem;
    margin: -450px auto 0;
    width: 1462px;
  }      
.visual-copy {
  display: grid;
  gap: 2rem;
  position: absolute;
  left: 50%;
  top: 11rem;
  z-index: 20;
  transform: translateX(-50%);   
}
.visual-copy .subtitle {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.8rem;
  line-height: 2.2rem;
  letter-spacing: 0.6rem;
  color: var(--gold);
  text-shadow: 0 0 10px rgba(var(--light-green),0);
  font-family: 'notosans-serif';
  font-weight: 700;
  font-style: normal;
  animation: txt 1 1s 1s both; 
}      
.visual-copy .subtitle::before {
  content: '';    
  width: 6rem;
  height: 0.2rem; 
  background: var(--gold);
}
.visual-copy .maintitle {
    font-size: 2.5rem;
    line-height: 6rem;
    font-weight: 700;
    letter-spacing: 0.6rem;
    color: #fff;
    font-family: Jua;    
    font-style: normal;
    animation: txt 1 1s 1.5s both;
  } 
.visual-copy .text-guide {
  display: flex;    
  align-items: center;  
  font-size: 1.8rem;
  line-height: 2.2rem;        
  font-weight: 700;       
  color: #fff;
  animation: txt 1 1s 1.8s both;
  cursor: pointer;
  scroll-behavior: smooth;
}  
.visual-copy .text-guide::after {
  content: '';    
  width: 1.6rem;
  height: 2.4rem;
  margin-left: 1.6rem;
  background: url(/Icons/arrow-right-light.svg) no-repeat;  
  transform: rotate(90deg);
}
.arrow {
  /* transform: rotate(90deg); */
  margin-left: 1.6rem;  
  width: 2.4rem;
  height: 2rem;
}

/* block content */
.block {
  display: flex;
  padding-left: 5rem;               
  position: relative;    
  gap: 5rem;  
  margin-right: 6rem;
}
.block > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.block:nth-of-type(even)  {
  flex-direction: row-reverse;
}
.block:nth-of-type(even) .block-count  {
  left: 35rem;
}
.block:nth-of-type(even) .block-content  {
  margin-right: 10rem;
}
.block img {
  width: 450px;
  height: 400px;  
  padding: 0 8rem 0 0;
}     
img:nth-of-type(even) {
flex-direction: row-reverse;
}   
.block-count > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.7rem;
    margin-right: 15rem;   
    margin-bottom: -10rem;  
}    
        
.block-subtitle {
  order: 1;
  display: flex;
  align-items: center;
  gap: 2.2rem;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.2rem;
  letter-spacing: 0.6rem;
  color: var(--gold);  
  margin-left: -18rem;
}     
.block-title {
  order: 2;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 8rem;
  color: #fff;
}      
.block-title-4 {
  line-height: 1.5;
}   
.block-subtitle::before {
  display: inline-block;
  content: '';
  width: 5rem;
  height: 0.2rem;
  background: var(--gold);
}        

.block-content {
  order: 3;
  font-size: 1.5rem;
  line-height: 3.5rem;
  color: #fff;     
}              
.block-more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  order: 4;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: var(--gold);
}
.block:nth-of-type(odd) .block-more  {
  margin-left: -30rem;
}
.block-more::after {
  display: inline-block;
  content: '';
  width: 1.2rem;
  height: 1.3rem;  
  background: url(/Icons/arrow-right-light.svg) no-repeat 0 0 / contain;
}
.block-count {
  position: absolute;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  left: 0;
  top: -5rem;
  font-size: 18rem;
  line-height: 1;
  color: var(--white-1);
  letter-spacing: -0.8rem;
}                
              
  @keyframes box {
    0% { transform: scale(3);}
    100% {transform: scale(1);}
  }
  @keyframes bg {
    0% { transform: translateY(0); opacity: 0;}
    50% { opacity: 0.5;}
    100% { transform: translateY(-200px); opacity: 1;}
  }
  @keyframes txt {
    0% { transform: translateX(-50px); opacity: 0;}    
    100% { transform: translateX(0); opacity: 1;}
  }
  @media screen and ( max-width: 1024px) {
     .visual {
      width: 100%;
     }
     .sns-title {
      top: 32rem;
     }
     .bg-img2 {
      top: 30rem;
     }
     .bg-img3{
      top: 60rem;
     }
     .gradient-content {
      height: 100px;     
      position: fixed;
     }
     .index-contents {
      gap: 10rem;      
      margin: -60rem auto 0;
     }
     .subtitle {
      font-size: 1.5rem;
     }
     .maintitle {
      font-size: 2.2rem;
     }
     .text-guide {
      font-size: 1.5rem;
     }
     .arrow {
      width: 1.5rem;
      height: 1.6rem;
     }
     .block {
      width: 85%;
      padding-top: 0;
     }
     .img {
      width: 100%;
      max-height: 80%;
      margin-left: -10rem;
      padding: 0 1rem 0 0;
      top: 60rem;
     }
     .block-count > div {
       top: 60rem;
    }
    .block-subtitle {
       top: 60rem;
  }
  .block-title {
    font-size: 1.8rem;
    line-height: 3rem;
    margin-left: 2rem;
  }
  .block-content {
    font-size: 1.4rem;
    width: 250px;
    line-height: 2.5rem;
    }
    .block-count {
      top: 32rem;
    }
    img {
      top: 50rem;   
      }
}
  @media screen and ( max-width:767px ) {  
    .about {
      margin-left: 0; 
    } 
    .gradient-content {
      height: 100px !important;
      margin-top: 0 !important;
    }
    .index-contents {
      margin-top: -460px !important;  
      gap: 3rem !important;
      height: auto; 
    }
  .bg-img1 {
    margin: auto;
  }
  .bg-img2 {
    top: 22rem;
    margin-top: -3rem;
  }
  .bg-img3{
  top: 28rem;
  margin: auto;
  }
  .sns {
    display: none;
  }
  .quick {
    display: none;
  }
  .visual {
    max-width: 100%;
  }
  .visual-copy .subtitle { 
    margin-top: -1rem;
    font-size: 1.2rem;
    line-height: 2;
    letter-spacing: 0.6rem; 
    font-family: 'notosans-serif';
    font-weight: 700;
    animation: txt 1 1s 1s both; 
  }      
.visual-copy .subtitle::before {
  content: '';    
  width: 1.5rem;
  height: 0.2rem; 
  background: var(--gold);
}
.visual-copy .maintitle {
  margin-top: 5.5rem;
  font-size: 1.9rem;
  line-height: 2.9rem;
  font-weight: 100;
  letter-spacing: 0;
}
.block > div {    
    margin-top: -7rem;
    }
a {
  display: block;
  padding-right: 3.2rem;
  text-align: right;
  font-size: 1.2rem;
  line-height: 2rem;        
  color: rgba(255, 255, 255, 0.5);
  border-right: 0.3rem solid rgba(255, 255, 255, 0.5);
}
  .quick a:hover {
    color: var(1eb);
    font-weight: 700;
  }
  .quick a:hover.active {
    border-color: #fff;
  }
.index-contents {
padding-left: 0;    
gap: 0;         
}
.img {
 
}
.block {
  display: block;
  padding-left: 1rem;               
  gap: 5rem;   
}
.block img {  
  width: 300px;
  max-height: 100%;
  object-fit: cover;
  margin-left: 4rem;
}
/* .block:nth-of-type(odd) .block-more  {
  margin-left: -30rem;
} */


.block-count {
  position: absolute;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  left: 2rem;
  top: 0;
  font-size: 8rem;
  line-height: 1;
  color: var(--white-5);
  letter-spacing: -0.3rem;
} 
.block-subtitle {
  order: 1;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 1rem;    
  margin-top: 10rem;
  margin-left: -50rem;
}  
.block-title {
  margin-top: 0rem;
  order: 2;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #fff;
  margin-right: 40rem;
}
.block-content {
  display: inline-block;     
  min-width: 600px;  
  order: 3;
  font-size: 1.28rem;
  line-height: 2.5rem;
  color: #fff;    
  margin-left: -20rem;
  padding: 0 1rem 0 1rem;  
} 
.block-more {
  font-size: 1.2rem;
  border-right: none;
}
.block:nth-of-type(odd) .block-content { 
 margin-right: 10rem;
} 
.block:nth-of-type(even)  {
  flex-direction: row-reverse;
}
.block:nth-of-type(odd) .block-more  {
  margin-right: 5rem;
}
.block:nth-of-type(even) .block-count  {
  left: 3rem;
}
.block:nth-of-type(even) .block-content  {
  margin-right: 10rem;
}

.block img {
  width: 450px;
  height: 350px;    
  margin-left: 14rem;
}     
img:nth-of-type(even) {
flex-direction: row-reverse;
} 
.visual-copy .text-guide {
 display: none;
}  
    }
  
@media screen and ( max-width: 450px) {
  .about {
   margin-left: -2rem; 
  }
 
  .index-contents {
    margin-top: -350px;  
    height: 100%; 
  }
  .bg-img1 {
    margin: auto;
  }
  .bg-img2 {
    top: 22rem;
    margin: auto;
  }
  .bg-img3{
  top: 28rem;
  margin: auto;
  }
  .sns {
    display: none;
  }
  .quick {
    display: none;
  }
  .visual {
    max-width: 100%;
  }
  .visual-copy .subtitle { 
    margin-top: -5rem;
    font-size: 0.8rem;
    line-height: 2;
    letter-spacing: 0.6rem; 
    font-family: 'notosans-serif';
    font-weight: 700;
    animation: txt 1 1s 1s both; 
  }      
.visual-copy .subtitle::before {
  content: '';    
  width: 1.5rem;
  height: 0.2rem; 
  background: var(--gold);
}
.visual-copy .maintitle {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.6rem;
  font-weight: 100;
  letter-spacing: 0;
}
.block > div {    
    margin-top: -7rem;
    }
a {
  display: block;
  padding-right: 3.2rem;
  text-align: right;
  font-size: 1.2rem;
  line-height: 2rem;        
  color: rgba(255, 255, 255, 0.5);
  border-right: 0.3rem solid rgba(255, 255, 255, 0.5);
}
  .quick a:hover {
    color: var(1eb);
    font-weight: 700;
  }
  .quick a:hover.active {
    border-color: #fff;
  }
.index-contents {
padding-left: 0;    
gap: 0;         
}
.img {
 
}
.block {
  display: block;
  padding-left: 1rem;               
  gap: 5rem;   
}
.block img {
  
  width: 300px;
  max-height: 100%;
  object-fit: cover;
  margin-left: 4rem;

}
/* .block:nth-of-type(odd) .block-more  {
  margin-left: -30rem;
} */


.block-count {
  position: absolute;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  left: 2rem;
  top: 0;
  font-size: 6rem;
  line-height: 1;
  color: var(--white-5);
  letter-spacing: -0.3rem;
} 
.block-subtitle {
  order: 1;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 1rem;    
  margin-top: 9rem;
  margin-left: -50rem;
}  
.block-title {
  margin-top: 0rem;
  order: 2;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #fff;
  margin-right: 50rem;
}
.block-content {
  display: block;
  min-width: 200px;     
  order: 3;
  font-size: 0.8rem;
  line-height: 1.5rem;
  color: #fff;   
  margin-left: -40rem;
  
} 
 
.block-more {
  font-size: 1.2rem;
}
.block:nth-of-type(odd) .block-content { 
 margin-right: 10rem;
} 
.block:nth-of-type(even)  {
  flex-direction: row-reverse;
}
.block:nth-of-type(odd) .block-more  {
  margin-right: 5rem;
}
.block:nth-of-type(even) .block-count  {
  left: 3rem;
}
.block:nth-of-type(even) .block-content  {
  margin-right: 10rem;
}

.block img {
  width: 350px;
  height: 250px;  
  padding: 0 8rem 0 0;
  margin-left: 5rem;
}     
img:nth-of-type(even) {
flex-direction: row-reverse;
} 
.visual-copy .text-guide {
 display: none;
}  
}     

</style>