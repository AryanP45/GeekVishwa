"use client"
import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
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
     
    if (pathname == "/") {
      let canvas, width, height, ctx;
      let fireworks = [];
      let particles = [];

      function setup() {
        canvas = document.getElementById("canvas");
        setSize(canvas);
        ctx = canvas.getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
        fireworks.push(new Firework(Math.random() * (width - 200) + 100));
        window.addEventListener("resize", windowResized);
        document.addEventListener("click", onClick);
      }

      setTimeout(setup, 1);

      function loop() {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;

        for (let i = 0; i < fireworks.length; i++) {
          let done = fireworks[i].update();
          fireworks[i].draw();
          if (done) fireworks.splice(i, 1);
        }

        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
          if (particles[i].lifetime > 80) particles.splice(i, 1);
        }

        if (Math.random() < 1 / 60)
          fireworks.push(new Firework(Math.random() * (width - 200) + 100));
      }
      setInterval(loop, 1 / 60);
      //setInterval(loop, 100/60);
      class Particle {
        constructor(x, y, col) {
          this.x = x;
          this.y = y;
          this.col = col;
          this.vel = randomVec(2);
          this.lifetime = 0;
        }

        update() {
          this.x += this.vel.x;
          this.y += this.vel.y;
          this.vel.y += 0.02;
          this.vel.x *= 0.99;
          this.vel.y *= 0.99;
          this.lifetime++;
        }

        draw() {
          ctx.globalAlpha = Math.max(1 - this.lifetime / 80, 0);
          ctx.fillStyle = this.col;
          ctx.fillRect(this.x, this.y, 2, 2);
        }
      }

      class Firework {
        constructor(x) {
          this.x = x;
          this.y = height;
          this.isBlown = false;
          this.col = randomCol();
        }

        update() {
          this.y -= 3;
          if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
            this.isBlown = true;
            for (let i = 0; i < 60; i++) {
              particles.push(new Particle(this.x, this.y, this.col));
            }
          }
          return this.isBlown;
        }

        draw() {
          ctx.globalAlpha = 1;
          ctx.fillStyle = this.col;
          ctx.fillRect(this.x, this.y, 2, 2);
        }
      }

      function randomCol() {
        var letter = "0123456789ABCDEF";
        var nums = [];

        for (var i = 0; i < 3; i++) {
          nums[i] = Math.floor(Math.random() * 256);
        }

        let brightest = 0;
        for (var i = 0; i < 3; i++) {
          if (brightest < nums[i]) brightest = nums[i];
        }

        brightest /= 255;
        for (var i = 0; i < 3; i++) {
          nums[i] /= brightest;
        }

        let color = "#";
        for (var i = 0; i < 3; i++) {
          color += letter[Math.floor(nums[i] / 16)];
          color += letter[Math.floor(nums[i] % 16)];
        }
        return color;
      }

      function randomVec(max) {
        let dir = Math.random() * Math.PI * 2;
        let spd = Math.random() * max;
        return { x: Math.cos(dir) * spd, y: Math.sin(dir) * spd };
      }

      function setSize(canv) {
        canv.style.width = innerWidth + "px";
        canv.style.height = innerHeight + "px";
        width = innerWidth;
        height = innerHeight;

        canv.width = innerWidth * window.devicePixelRatio;
        canv.height = innerHeight * window.devicePixelRatio;
        canvas
          .getContext("2d")
          .scale(window.devicePixelRatio, window.devicePixelRatio);
      }

      function onClick(e) {
        fireworks.push(new Firework(e.clientX));
      }

      function windowResized() {
        setSize(canvas);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
      }
    }
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
