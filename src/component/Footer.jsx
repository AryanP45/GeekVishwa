"use client"
import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'
import { useEffect } from 'react'

const Footer = () => {

  useEffect(() => {
    function lines() {
      let width = Math.random() * 12;
      let e = document.createElement('div')
      e.setAttribute("class", "circle")
      document.body.appendChild(e)
      e.style.width = 2 + width + 'px'
      e.style.left = Math.random() * innerWidth + 'px';
      e.style.margin = "20px 0"

      setTimeout(() => {
        document.body.removeChild(e)
      }, 5000);
    }

    setInterval(function () {
      lines()
    }, 500)

    var c = document.getElementById("fire-works");
    var ctx = c.getContext("2d");

    var cwidth, cheight;
    var shells = [];
    var pass = [];

    var colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];

    window.onresize = function () { reset(); }
    reset();
    function reset() {

      cwidth = window.innerWidth;
      cheight = window.innerHeight;
      c.width = cwidth;
      c.height = cheight;
    }

    function newShell() {

      var left = (Math.random() > 0.5);
      var shell = {};
      shell.x = (1 * left);
      shell.y = 1;
      shell.xoff = (0.01 + Math.random() * 0.007) * (left ? 1 : -1);
      shell.yoff = 0.01 + Math.random() * 0.007;
      shell.size = Math.random() * 6 + 3;
      shell.color = colors[Math.floor(Math.random() * colors.length)];

      shells.push(shell);
    }

    function newPass(shell) {

      var pasCount = Math.ceil(Math.pow(shell.size, 2) * Math.PI);

      for (i = 0; i < pasCount; i++) {

        var pas = {};
        pas.x = shell.x * cwidth;
        pas.y = shell.y * cheight;

        var a = Math.random() * 4;
        var s = Math.random() * 10;

        pas.xoff = s * Math.sin((5 - a) * (Math.PI / 2));
        pas.yoff = s * Math.sin(a * (Math.PI / 2));

        pas.color = shell.color;
        pas.size = Math.sqrt(shell.size);

        if (pass.length < 1000) { pass.push(pas); }
      }
    }

    var lastRun = 0;
    
    function Run() {

      var dt = 1;
      if (lastRun != 0) { dt = Math.min(50, (performance.now() - lastRun)); }
      lastRun = performance.now();

      ctx.clearRect(0, 0, cwidth, cheight);
      ctx.fillStyle = "rgba(0,0,0,0.25)";
      ctx.fillRect(0, 0, cwidth, cheight);

      if ((shells.length < 10) && (Math.random() > 0.96)) { newShell(); }

      for (let ix in shells) {

        var shell = shells[ix];

        ctx.beginPath();
        ctx.arc(shell.x * cwidth, shell.y * cheight, shell.size, 0, 2 * Math.PI);
        ctx.fillStyle = shell.color;
        ctx.fill();

        shell.x -= shell.xoff;
        shell.y -= shell.yoff;
        shell.xoff -= (shell.xoff * dt * 0.001);
        shell.yoff -= ((shell.yoff + 0.2) * dt * 0.00005);

        if (shell.yoff < -0.005) {
          newPass(shell);
          shells.splice(ix, 1);
        }
      }

      for (let ix in pass) {

        var pas = pass[ix];

        ctx.beginPath();
        ctx.arc(pas.x, pas.y, pas.size, 0, 2 * Math.PI);
        ctx.fillStyle = pas.color;
        ctx.fill();

        pas.x -= pas.xoff;
        pas.y -= pas.yoff;
        pas.xoff -= (pas.xoff * dt * 0.001);
        pas.yoff -= ((pas.yoff + 5) * dt * 0.0005);
        pas.size -= (dt * 0.002 * Math.random())

        if ((pas.y > cheight) || (pas.y < -50) || (pas.size <= 0)) {
          pass.splice(ix, 1);
        }
      }
      requestAnimationFrame(Run);
    }
    setInterval(() => {
      Run();
    },500);
  }, [])



  return (
    <div className='footer' id='footer'>

      <div className='h-[300px] flex items-center text-white justify-around footer-inner'>
        <div className='h-[80%] footer-logo'>
          <img src="../assets/gfg_logo_small.png" alt='event_logo' className='footer-logo'></img>
        </div>
        <div className='flex flex-col footer-block'>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title'>Documents</span>
          <div className='flex flex-col mt-[1rem] text-[20px] footer-item'>

            <a href='https://hackthespace.co/images/footer/Code%20of%20Conduct%20-%20HTS.pdf'>
              <span>Rule Book</span>
            </a>
            <a className='' href='https://devfolio.co/code-of-conduct'>
              <span>Code of conduct</span>
            </a>
          </div>

        </div>
        <div className='flex flex-col footer-block'>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title'>Social Handles</span>
          <div className='flex items-center mt-[1rem] footer-item'>
            <Link href="https://www.instagram.com/gfg_viit/" className='px-[0.5rem] text-[40px] footer-social-icons'>
              <BsInstagram />
            </Link>
            <Link href="https://www.linkedin.com/company/geeksforgeeks-viit-student-chapter/" className='px-[0.5rem] text-[40px]'>
              <AiFillLinkedin />
            </Link>

          </div>
        </div>
        <div className='flex flex-col items-center footer-block'>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title '>Contact Us</span>
          <a href="mailto:gfg@viit.ac.in" className='mt-[1rem] text-[20px] footer-item'>gfg@viit.ac.in</a>

        </div>
      </div>

      <div className=' flex justify-center align-center pb-[1rem] text-[18px] copyright'>
        <span>Made with &nbsp;</span>
        &#10084;&#65039;
        <span>&nbsp; by <Link href="https://github.com/AryanP45/GeekVishwa.github.io">  GFG Team
        </Link>.
        </span>

      </div>

    </div>
  )
}

export default Footer
