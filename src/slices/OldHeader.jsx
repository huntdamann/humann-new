<header ref={headerRef} className="header">
    
          <div className="left">
            <Image src="/images/logo-main.png" alt="Logo" fill style={{ objectFit: "contain"}} />
          </div>

          <div className="middle">
            {/* <div ref={iconsRef} className="icons">
              <GiRoundStar />
              <GiRoundStar />
            </div> */}
           
            {/* <h2 ref={emblem}>Lightship</h2> */}

            {/* <ul className="nav">
              <li>
                About
              </li>
              <li>
                Services
              </li>
              <li>
                Work
              </li>
              <li>
                Blog
              </li>
            </ul> */}
            <div className="flex rounded-[20px] text-center p-2 bg-black text-sm flex-col">
              <span>Freelance Availability: </span>
              <span>March 2026</span>
            </div>
          </div>

          <div className="right">
            <div style={{display: "flex", alignItems: "center", gap: "5px", border: "1px black solid", padding: '1rem', borderRadius: "20px", backgroundColor: "black"}}>
              <span className="hover:text-yellow-50 " style={{textDecoration: "underline", cursor: "pointer"}}>Let's Connect</span>
              <FaArrowLeft
              style={{
                transform: "rotate(135deg)"
              }} />
            </div>
            <TbMenu />

          </div>
          
     </header>