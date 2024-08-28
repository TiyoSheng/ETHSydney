<script setup>
import { ref } from 'vue'
const question = ref([
  { id: 1, question: 'What is ETHSydney?', answer: 'ETHSydney is a community-driven hackathon for the Ethereum community.' },
  { id: 2, question: 'Who can attend ETHSydney?', answer: 'ETHSydney welcomes everyone to join the hackathon, specifically catering to university students, developers aiming to delve into blockchain development, seasoned web3 builders, and individuals equipped with skills in areas such as researchers and UI/UX.' },
  { id: 3, question: `I'm new to Ethereum - can I still participate?`, answer: 'Absolutely! Our events are open to both beginners and veterans of the web3 world. This event in particular will be tailored to attendees who have experience with Web2 technologies and are interested in building on web3 for the first time.' },
  { id: 4, question: 'How much does it cost?', answer: '0. The event is 100% free for attendees (including food).' },
  { id: 5, question: 'Will ETHSydney offer travel scholarships to hackers?', answer: 'The event is free-of-charge to attend. Unfortunately, ETHSydney does not cover any travel, visa or accommodation costs to attend our in-person events. However, we do provide food for the weekend. ' },
  { id: 6, question: 'How many people can be in a team?', answer: 'Up to 5.' },
  { id: 7, question: `What if I've never been to a hackathon before?`, answer: 'Absolutely no worries! We’ll admit that it’s definitely helpful to have some programming or technical experience, but it’s not a requirement. Don’t worry, we won’t throw you in the deep end. We’ll be organising talks, mentors, and workshops to get you started and help you along the way as you build your project. Hackathons are great places to learn new skills in a short amount of time. Just come eager to learn, excited to meet lots of awesome people, and most importantly, come ready to build.' },
  { id: 8, question: 'When does ETHSydney hackathon start?', answer: 'ETHSydney is a 3-day hackathon, which starts on 25 October, and ends on 27 October with on-sites workshops, exclusive events for the hackers. <br /> Hacking starts in the evening of 25 Oct, and 26 Oct the whole day. All projects are submitted by the noon of 27 Oct.' },
  { id: 9, question: 'Can I start working on my hacking project before the event?', answer: 'No. In the interest of fairness, attendees should not be working on their project or ideas prior to the start of ETHSydney and we do not allow participants to work on pre-existing projects. However you may prepare by being acquainted with all of the tools and technologies that you want to use.' },
  { id: 10, question: 'Will there be meals provided?', answer: 'Yes!! All meals will be provided! All you need to do is have fun at the event!' },
  { id: 11, question: 'I have a question that is not listed here. Who can I ask?', answer: 'You can reach out to the ETHSydney’s team on <a href="https://t.me/EthereumSydney" target="_blank">Telegram</a>, <a href="https://twitter.com/EthereumSydney" target="_blank">X</a> or Email <a href="mailto:hi@ethsydney.net">(hi@ethsydney.net)</a>' },
])
const activeIndex = ref([])
</script>

<template>
  <div class="section">
    <div class="section-content">
      <img src="../assets/images/title6.png" alt="venue" class="title">
      <div class="list flex-center-center">
        <div class="item" v-for="item in question" :key="item.id"
          @click="activeIndex.indexOf(item.id) === -1 ? activeIndex.push(item.id) : activeIndex.splice(activeIndex.indexOf(item.id), 1)">
          <div class="flex-center-sb question-wrap">
            <p class="question">{{ item.question }}</p>
            <img src="../assets/images/arrow.svg" alt="arrow" class="arrow" :style="{ transform: activeIndex.indexOf(item.id) === -1 ? 'rotate(0deg)' : 'rotate(90deg)' }">
          </div>
          <div class="answer" :style="{ maxHeight: activeIndex.indexOf(item.id) === -1 ? '0' : '150px' }">
            <p v-html="item.answer"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/06.png');

  .list {
    flex-direction: column;
    max-width: 1160px;
    margin: auto;
    margin-top: 48px;
    padding: 0 20px;

    .item {
      width: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(10, 10, 10, 0.1);
      cursor: pointer;

      .question-wrap {
        width: 100%;
        height: 96px;
      }

      .question {
        font-family: NotoSans;
        font-size: 23px;
        line-height: 32px;
        letter-spacing: -0.47px;
        color: #000000;
      }

      .arrow {
        width: 24px;
        height: 24px;
        transition: all .3s;
      }

      .answer {
        // display: none;
        max-height: 0;
        overflow: hidden;
        transition: all .3s;

        p {
          font-family: Inter;
          font-size: 18px;
          font-weight: normal;
          line-height: 28px;
          letter-spacing: -0.17px;
          color: #000000;
          text-align: left;
          padding: 0 0 16px 0;
          box-sizing: border-box;

          a {
            color: #0069c2;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section-content {
    background-image: url('../assets/images/m_06.png');
    .list {
      padding: 0 .56rem;
      box-sizing: border-box;
      margin-top: .38rem;

      .item {

        .question-wrap {
          height: .76rem;
        }

        .question {
          font-size: .18rem;
          line-height: .25rem;
        }

        .arrow {
          width: .2rem;
          height: .2rem;
        }

        .answer {
          p {
            padding: 0 0 .16rem 0;
            font-size: .14rem;
            line-height: .22rem;
          }
        }
      }
    }
  }

}
</style>
<style lang="scss">
.answer {
  p {
    a {
      color: #0069c2;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>