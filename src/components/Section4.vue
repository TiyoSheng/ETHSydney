<script setup>
import { ref } from 'vue'
import kt from '../assets/avatar/kt.png'
import am from '../assets/avatar/am.png'
import bp from '../assets/avatar/bp.png'
import c from '../assets/avatar/c.png'
import dw from '../assets/avatar/dw.png'
import ed from '../assets/avatar/ed.png'
import gm from '../assets/avatar/gm.png'
import kj from '../assets/avatar/kj.png'
import kk from '../assets/avatar/kk.png'
import lr from '../assets/avatar/lr.png'
import mc from '../assets/avatar/mc.png'
import ml from '../assets/avatar/ml.png'
import mo from '../assets/avatar/mo.png'
import nm from '../assets/avatar/nm.png'
import rp from '../assets/avatar/rp.png'
import sh from '../assets/avatar/sh.png'
import sk from '../assets/avatar/sk.png'
import ss from '../assets/avatar/ss.png'
import sn from '../assets/avatar/sn.png'
import sp from '../assets/avatar/sp.png'
import sv from '../assets/avatar/sv.png'
import ts from '../assets/avatar/ts.png'
import yk from '../assets/avatar/yk.png'

const list = [
  { name: 'Kartik Talwar', avatar: kt, role: 'ETHGlobal' },
  { name: 'Stani Kulechov', avatar: sk, role: 'Avara Labs' },
  { name: 'Swaroop Hegde', avatar: sh, role: 'PowerLoom' },
  { name: 'Mikael Lazarev', avatar: ml, role: 'Gearbox' },
  { name: 'Sandy Peng', avatar: sp, role: 'Scroll' },
  { name: 'Lane Rettig', avatar: lr, role: 'Spacemesh' },
  { name: 'Nandit Mehra', avatar: nm, role: 'Lighthouse' },
  { name: 'Sandeep Nailwal', avatar: sn, role: 'Polygon Labs' },
  { name: 'Tomasz Stanczak', avatar: ts, role: 'Nethermind' },
  { name: 'Marek Olszewski', avatar: mo, role: 'Celo' },
  { name: 'Kautuk Kundan', avatar: kk, role: 'Stackr Labs' },
  { name: 'Dominic Williams', avatar: dw, role: 'DFINITY Foundation' },
  { name: 'Yesim Kaymak', avatar: yk, role: 'Scalar Capital' },
  { name: 'Bryan Pellegrino', avatar: bp, role: 'LayerZero' },
  { name: 'Mike Cahill', avatar: mc, role: 'Douro Labs' },
  { name: 'Kevin Jones', avatar: kj, role: 'Edge & Node | Build Guild' },
  { name: 'ctrlc03', avatar: c, role: 'Privacy and Scaling Exploration' },
  { name: 'Raphael Panic', avatar: rp, role: 'Sacred Protocol' },
  { name: 'Sumit Vekariya', avatar: sv, role: 'Sacred Protocol' },
  { name: 'Gwen Martin', avatar: gm, role: 'Ora' },
  { name: 'Shantanu Sontakke', avatar: ss, role: 'Zokyo' },
  { name: 'Ethan Duo', avatar: ed, role: 'DPLabs' },
  { name: 'Alex Metelli', avatar: am, role: 'Nethermind' }
]
</script>

<template>
  <div class="section">
    <div class="section-content">
      <img src="../assets/images/title4.png" alt="venue" class="title">
      <div class="list">
        <div v-for="item in []" class="item">
          <img :src="item.avatar" alt="" class="avatar">
          <p class="name">{{ item.name }}</p>
          <p class="role">{{ item.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-content {
  background-image: url('../assets/images/04.png');
  min-height: 100vh;

  .list {
    max-width: 1100px;
    margin: auto;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 28px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatar {
        width: 233px;
        height: 233px;
        border-radius: 50%;
      }

      .name {
        font-family: NotoSans;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: center;
        color: #000000;
        margin-top: -20px;
      }

      .role {
        font-family: Inter;
        font-size: 15px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: #000000;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .section-content {
    background-image: url('../assets/images/m_04.png');
    .list {
      gap: .56rem;
      margin-top: .64rem;
      padding: 0 .6rem;
      box-sizing: border-box;
      .item {
        margin-bottom: -.2rem;
        .avatar {
          width: 1.72rem;
          height: auto;
        }
        .name {
          font-size: .14rem;
          line-height: .22rem;
          margin-top: -.14rem;
        }
        .role {
          font-size: .13rem;
          line-height: .19rem;
        }
      }
    }
  }
  
}
</style>