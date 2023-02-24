import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: inline-block;
  overflow: hidden;
  position: fixed;
  inset: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @keyframes loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .loading div {
    left: 47px;
    top: 24px;
    position: absolute;
    animation: loading linear 1s infinite;
    background: #3989df;
    width: 6px;
    height: 12px;
    border-radius: 3px / 6px;
    transform-origin: 3px 26px;
  }
  .loading div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9166666666666666s;
    background: #3989df;
  }
  .loading div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.8333333333333334s;
    background: #3989df;
  }
  .loading div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.75s;
    background: #3989df;
  }
  .loading div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.6666666666666666s;
    background: #3989df;
  }
  .loading div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.5833333333333334s;
    background: #3989df;
  }
  .loading div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.5s;
    background: #3989df;
  }
  .loading div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.4166666666666667s;
    background: #3989df;
  }
  .loading div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.3333333333333333s;
    background: #3989df;
  }
  .loading div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.25s;
    background: #3989df;
  }
  .loading div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.16666666666666666s;
    background: #3989df;
  }
  .loading div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.08333333333333333s;
    background: #3989df;
  }
  .loading div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
    background: #3989df;
  }
  .loading {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.7);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .loading div {
    box-sizing: content-box;
  }
`
