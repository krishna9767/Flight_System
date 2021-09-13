import React, { Fragment } from 'react';

function Skyage() {
    return ( < Fragment >
        <
        div > Hello < /div> <
        div > <
        h1 > Hello Krishna < /h1> < /
        div >

        {
            /* <
                    header id = "header" >
                    <
                    nav id = "main-menu"
                    className = "navbar navbar-default navbar-fixed-top"
                    role = "banner" >
                    <
                    div className = "container" >
                    <
                    div className = "navbar-header" >
                    <
                    button type = "button"
                    className = "navbar-toggle"
                    data_toggle = "collapse"
                    data_target = ".navbar-collapse" >
                    <
                    span className = "sr-only" > Toggle navigation < /span> <
                    span className = "icon-bar" > < /span> <
                    span className = "icon-bar" > < /span> <
                    span className = "icon-bar" > < /span> < /
                    button > <
                    a className = "navbar-brand"
                    href = "index.html" > < img src = "images/logo.png"
                    alt = "logo" / > < /a> < /
                    div >

                    <
                    div className = "collapse navbar-collapse navbar-right" >
                    <
                    ul className = "nav navbar-nav" >
                    <
                    li className = "scroll active" > < a href = "#home" > Home < /a></li >
                    <
                    li className = "scroll" > < a href = "#features" > Features < /a></li >
                    <
                    li className = "scroll" > < a href = "#services" > Services < /a></li >
                    <
                    li className = "scroll" > < a href = "#portfolio" > Portfolio < /a></li >
                    <
                    li className = "scroll" > < a href = "#about" > About < /a></li >
                    <
                    li className = "scroll" > < a href = "" > Partners < /a></li >
                    <
                    li className = "scroll" > < a href = "" > Careers < /a></li >
                    //  <li className="scroll"><a href="#pricing">Pricing</a></li>--
                    //    <li className="scroll"><a href="#blog">Blog</a></li> --
                    //     <li className="scroll"><a href="#get-in-touch">Contact</a></li>   --
                    <
                    /ul> < /
                    div > <
                    /div>
                    // --container--
                    <
                    /nav>
                    //  /nav--
                    <
                    /header>
                    // /header--

                    <
                    section id = "main-slider" >
                    <
                    div className = "owl-carousel" >
                    <
                    div className = "item" >
                    <
                    div className = "slider-inner" >
                    <
                    div className = "container" >
                    <
                    div className = "row" >
                    <
                    div className = "col-sm-6" >
                    <
                    div className = "carousel-content" >
                    <
                    h2 > < b > Big Data Solutions < /b> < /
                    h2 > <
                    p > < b > Hadoop < /b></p >
                    <
                    p > Analytics < /p> <
                    p > Machine Learning < /p> <
                    p > Automation < /p> < /div > <
                    /div> < /div > <
                    /div> < /div >
                    //  item--

                    <
                    div className = "item"
                    // style = {{background-image: "url('./images/slider/bg2.jpg')"}};
                    >
                    <
                    div className = "slider-inner" >
                    <
                    div className = "container" >
                    <
                    div className = "row" >
                    <
                    div className = "col-sm-6" >
                    <
                    div className = "carousel-content" >
                    <
                    /div > < /
                    div > < /div > < /
                    div > < /div > <section /
                    div ></section>
                    //  .item--
                    <
                    /div>
                    // --owl-carousel--
                    <
                    section id = "features" >
                    <
                    div className = "container" >
                    <
                    div className = "section-header" >
                    <
                    h2 className = "section-title text-center wow fadeInDown" > Features < /h2> <
                    p className = "text-center wow fadeInDown" > New Thinking To Implement New Technology < /p> < /
                    div > <
                    div className = "row" >
                    <
                    div className = "col-sm-6 wow fadeInLeft" >
                    <
                    img className = "img-responsive"
                    src = "images/main-feature.png"
                    alt = "" / >
                    <
                    /div> <
                    div className = "col-sm-6" >
                    <
                    div className = "media service-box wow fadeInRight" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-line-chart" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > IOT < /h4> <
                    p > Your all devices will tell the TRUTH < /p> < /
                    div > <
                    /div>

                    <
                    div className = "media service-box wow fadeInRight" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-cubes" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Machine Learning < /h4> <
                    p > Machine will learn to teach your Behavior < /p> < /
                    div > <
                    /div>

                    <
                    div className = "media service-box wow fadeInRight" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-pie-chart" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Big Data Solutions < /h4> <
                    p > The Big Data will give you business value with our solutions < /p> < /
                    div > <
                    /div>

                    <
                    div className = "media service-box wow fadeInRight" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-pie-chart" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Robotics < /h4> <
                    p > Repeatation task will be handle by the ROBOTS < /p> < /
                    div > <
                    /div> < /
                    div > <
                    /div> < /
                    div > <
                    /section>

                    <
                    section id = "cta2" >
                    <
                    div className = "container" >
                    <
                    div className = "text-center" >
                    <
                    h2 className = "wow fadeInUp"
                    // data_wow_duration = "300ms"
                    // data_wow_delay = "0ms"
                    >
                    The goal is to turn data into < span > information < /span> and information into insight < /
                    h2 >

                    <
                    img className = "img-responsive wow fadeIn"
                    src = "images/cta2/cta2-img.png"
                    alt = ""
                    data_wow_duration = "300ms"
                    data_wow_delay = "300ms" / >
                    <
                    /div> < /
                    div > <
                    /section>

                    <
                    section id = "services" >
                    <
                    div className = "container" >

                    <
                    div className = "section-header" >
                    <
                    h2 className = "section-title text-center wow fadeInDown" > Our Services < /h2> <
                    p className = "text-center wow fadeInDown" > Find the services needful to your business < br / > toget perfect Return On Investment < /p> < /
                    div >

                    <
                    div className = "row" >
                    <
                    div className = "features" >
                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "0ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-line-chart" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > UX design < /h4> <
                    p > Your business will be represented by our design
                    for better understanding < /p> < /
                    div > <
                    /div> < /
                    div >
                    //    --col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "100ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-cubes" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > UI design < /h4> <
                    p > User interface designed
                    for attractive representation < /p> < /
                    div > <
                    /div> < /
                    div >
                    //  --col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "200ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-pie-chart" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Web Services < /h4> <
                    p > Perfectness in web services improves the productivity < /p> < /
                    div > <
                    /div> < /
                    div >
                    //   --col-md-4--








                    <
                    /div> < /
                    div >
                    //  --row--

                    <
                    div className = "row" >

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "200ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-pie-chart" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Big Data Solutions < /h4> <
                    p > Dealing with any complex data
                    for Analysis and Automation of your work. < /p> < /
                    div > <
                    /div> < /
                    div >
                    //   --col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "300ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-bar-chart" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Cloud Computing < /h4> <
                    p > Centralize your data to cloud
                    for mobility in access and supreme. < /p> < /
                    div > <
                    /div> < /
                    div >
                    //  --col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "400ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-language" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Analytics < /h4> <
                    p > Lets take insights of the data by analyzing it to predict the future needs of the clients. < /p> < /
                    div > <
                    /div> < /
                    div >
                    //   --col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "400ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-language" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Robotics < /h4> <
                    p > The repetitive task of your business will manage by Robotic Process Automation to make simplicity. < /p> < /
                    div > <
                    /div> < /
                    div >
                    //   --col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "400ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-language" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Machine Learning < /h4> <
                    p > The machine will learn how to do the task by learning itself and serve your business on daily basis. < /p> < /
                    div > <
                    /div> < /
                    div >
                    // .col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "500ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-bullseye" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > AR & VR < /h4> <
                    p > adds digital elements to a live view,
                    implies a complete immersion experience that shuts out the physical world < /p> < /
                    div > <
                    /div> < /
                    div >


                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "500ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-bullseye" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > Data Migration < /h4> <
                    p > Make your business data alive by migrating it to the Cloud and represent your business more effectively. < /p> < /
                    div > <
                    /div> < /
                    div >
                    // --col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    data_wow_duration = "300ms"
                    data_wow_delay = "500ms" >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-bullseye" > < /i> < /
                    div > <
                    div className = "media-body" >
                    <
                    h4 className = "media-heading" > D - Stream < /h4> <
                    p > Processing makes faster as per speed of the input data from the devices to process and to display the output immediately. < /p> < /
                    div > <
                    /div> < /
                    div >
                    //  .col-md-4--

                    <
                    div className = "col-md-4 col-sm-6 wow fadeInUp"
                    // data_wow_duration = "300ms"
                    // data_wow_delay = "500ms"
                    >
                    <
                    div className = "media service-box" >
                    <
                    div className = "pull-left" >
                    <
                    i className = "fa fa-bullseye" > < /i> < /
                    div > <
                    h4 className = "media-heading" > ETL < /h4> <
                    p > Make your business data alive by migrating it to the Cloud < /p> < /
                    div > <
                    /div> < /div >
                    //  --col-md-4--

                    <
                    /div>  </div >

                    <
                    /section>

                    <
                    /div>


                    <
                    /section> */
        }


        {
            /* // #services--

                    <
                    section id = "portfolio" >
                    <
                    div className = "container" >
                    <
                    div className = "section-header" >
                    <
                    h2 className = "section-title text-center wow fadeInDown" > Portfolio < /h2>

                    <
                    /div>

                    <
                    div className = "text-center" >
                    <
                    ul className = "portfolio-filter" >
                    <
                    li > < a className = "active"
                    href = "#"
                    data - filter = "*" > All Works < /a></li >
                    <
                    li > < a href = "#"
                    data - filter = ".creative" > Creative < /a></li >
                    <
                    li > < a href = "#"
                    data - filter = ".corporate" > Corporate < /a></li >
                    <
                    li > < a href = "#"
                    data - filter = ".portfolio" > Portfolio < /a></li >
                    <
                    /ul>
                    //  /#portfolio-filter--
                    <
                    /div>

                    <
                    div className = "portfolio-items" >
                    <
                    div className = "portfolio-item creative" >
                    <
                    div className = "portfolio-item-inner" >
                    <
                    img className = "img-responsive"
                    src = "images/portfolio/magic.jpg"
                    alt = "" / >
                    <
                    div className = "portfolio-info" >
                    <
                    h3 > MAGICENGLISH < /h3>

                    <
                    a href = "http://magicenglish.org/" > magicenglish < /a> < /
                    div > <
                    /div> < /
                    div >
                    //  --portfolio-item--

                    <
                    div className = "portfolio-item corporate portfolio" >
                    <
                    div className = "portfolio-item-inner" >
                    <
                    img className = "img-responsive"
                    src = "images/portfolio/02.jpg"
                    alt = "" / >
                    <
                    div className = "portfolio-info" >

                    <
                    h3 > KTPETERSON < /h3>

                    <
                    a href = "http://www.ktpeterson.com/" > ktpeterson < /a> < /
                    div > <
                    /div> < /
                    div >
                    //  --portfolio-item--

                    <
                    div className = "portfolio-item creative" >
                    <
                    div className = "portfolio-item-inner" >
                    <
                    img className = "img-responsive"
                    src = "images/portfolio/03.jpg"
                    alt = "" / >
                    <
                    div className = "portfolio-info" >

                    <
                    h3 > SPIRITGATE < /h3>

                    <
                    a href = "http://spiritgate.com/" > spiritgate < /a> < /
                    div > <
                    /div> < /
                    div >
                    //   --portfolio-item--

                    <
                    div className = "portfolio-item corporate" >
                    <
                    div className = "portfolio-item-inner" >
                    <
                    img className = "img-responsive"
                    src = "images/portfolio/04.jpg"
                    alt = "" / >
                    <
                    div className = "portfolio-info" >

                    <
                    h3 > WANG LAW OFFICE < /h3>

                    <
                    a href = "http://www.wanglawoffice.com" > wanglawoffice < /a> < /
                    div > <
                    /div> < /
                    div >
                    //  --portfolio-item--

                    <
                    div className = "portfolio-item creative portfolio" >
                    <
                    div className = "portfolio-item-inner" >
                    <
                    img className = "img-responsive"
                    src = "images/portfolio/05.jpg"
                    alt = "" / >
                    <
                    div className = "portfolio-info" >

                    <
                    h3 > AIPT < /h3>

                    <
                    a href = "https://www.aipt.edu.au" > AIPT < /a> < /
                    div > <
                    /div> < /
                    div >
                    //   --portfolio-item--

                    <
                    div className = "portfolio-item corporate" >
                    <
                    div className = "portfolio-item-inner" >
                    <
                    img className = "img-responsive"
                    src = "images/portfolio/06.jpg"
                    alt = "" / >
                    <
                    div className = "portfolio-info" >
                    <
                    h3 > PEARNSPOINT < /h3>

                    <
                    a href = "http://pearnspoint.com" > pearnspoint < /a> < /
                    div > <
                    /div> < /
                    div >
                    //  --portfolio-item--

                    <
                    div className = "portfolio-item creative portfolio" >
                    <
                    div className = "portfolio-item-inner" >
                    <
                    img className = "img-responsive"
                    src = "images/portfolio/07.jpg"
                    alt = "" / >
                    <
                    div className = "portfolio-info" >
                    <
                    h3 > STEWARTLONKY < /h3>

                    <
                    a href = "http://stewartlonky.com" > stewartlonky < /a> < /
                    div > <
                    /div> < /
                    div >
                    //   --portfolio-item--

                    <
                    div className = "portfolio-item corporate" >
                    <
                    div className = "portfolio-item-inner" >
                    <
                    img className = "img-responsive"
                    src = "images/portfolio/08.jpg"
                    alt = "" / >
                    <
                    div className = "portfolio-info" >
                    <
                    h3 > LAPERLA - GLOBAL < /h3>

                    <
                    a href = "http://laperla-global.com" > laperla - global < /a> < /
                    div > <
                    /div> < /
                    div >
                    //   --portfolio-item--
                    <
                    /div> < /
                    div > /
                    .container-- >
                    <
                    /section>
                    //#
                    portfolio-- >

                    <
                    section id = "about" >
                    <
                    div className = "container" >

                    <
                    div className = "section-header" >
                    <
                    h2 className = "section-title text-center wow fadeInDown" > About Us < /h2> <
                    p className = "text-center wow fadeInDown" > SkyAge IT Services Pvt.Ltd.is India’ s fastest growing IT Company with strong focus on Big data solutions,
                    Cloud Computing,
                    Machine Learning,
                    Web Services with the best possible solutions
                    for the clients.During today’ s competitive &
                    challenging economic world new product design & development process requires large amount of research & development efforts to deliver perfect solutions.Big Data is a big problem
                    for all companies to manage,
                    to use it
                    for business growth and taking insights from the huge amount of data,
                    we are making life simple with the help of Hadoop(All Components).Cloud Computing is very important.SkyAge IT Services Pvt.Ltd.provides total solution information technology services to enterprises,
                    government sectors,
                    educational institutions,
                    auto companies,
                    retail sector,
                    banking & financial institutions & various industries.SkyAge team seamlessly integrates with our client’ s team thereby acting as virtual extensions to their existing operations.We follow rigorous project management principles with process automation and ensure quality delivery in all our engagements.We highly skilled,
                    dedicated IT professionals,
                    its subsidiaries,
                    and Joint Ventures provide customized IT solutions
                    for several industries using our range of technical expertise and experience.Our management and research teams are putting untiring efforts in the 24 - hour developmental labs,
                    software and web professionals constantly deliver the products pertaining to the industry need,
                    converging of all the new developmental aspects that are being introduced in the IT market. < /p> <
                    p className = "text-center wow fadeInDown" > < /p> <
                    p className = "text-center wow fadeInDown" > < /p>

                    <
                    /div>

                    <
                    div className = "row" >
                    <
                    div className = "col-sm-6 wow fadeInLeft" >
                    <
                    h3 className = "column-title" > Video Intro < /h3>
                    16: 9 aspect ratio-- >
                    <
                    div className = "embed-responsive embed-responsive-16by9" >
                    <
                    iframe src = "//player.vimeo.com/video/58093852?title=0&amp;byline=0&amp;portrait=0&amp;color=e79b39"
                    frameborder = "0"
                    webkitallowfullscreen mozallowfullscreen allowfullscreen > < /iframe> < /
                    div > <
                    /div>

                    <
                    div className = "col-sm-6 wow fadeInRight" >
                    <
                    h3 className = "column-title" > Our story < /h3> <
                    p > Our Development background is helping us to move to Cloud rapidly.We are now confident about our work,
                    our planning,
                    our thinking,
                    our positivity,
                    our rightest direction.Our path is
                    for clients.We will deliver the best suitable solutions to our clients. < /p>

                    <
                    div className = "row" >
                    <
                    div className = "col-sm-6" >
                    <
                    ul className = "nostyle" >
                    <
                    li > < i className = "fa fa-check-square" > < /i> Positivity</li >
                    <
                    li > < i className = "fa fa-check-square" > < /i> Patience</li >
                    <
                    li > < i className = "fa fa-check-square" > < /i> Satisfaction</li >
                    <
                    /ul> < /
                    div >


                    <
                    div className = "col-sm-6" >
                    <
                    ul className = "nostyle" >
                    <
                    li > < i className = "fa fa-check-square" > < /i>Focus </li >
                    <
                    li > < i className = "fa fa-check-square" > < /i>Future Realistic </li >
                    <
                    li > < i className = "fa fa-check-square" > < /i>Smart Work</li >
                    <
                    /ul> < /
                    div > <
                    /div>

                    <
                    a className = "btn btn-primary"
                    href = "#" > Learn More < /a>

                    <
                    /div> < /
                    div > <
                    /div> < /
                    section >
                    // /#about--

                    <
                    section id = "work-process" >
                    <
                    div className = "container" >
                    <
                    div className = "section-header" >
                    <
                    h2 className = "section-title text-center wow fadeInDown" > Our Process < /h2> <
                    p className = "text-center wow fadeInDown" > The process we follow is to push the business in right direction < /p> < /
                    div >

                    <
                    div className = "row text-center" >
                    <
                    div className = "col-md-2 col-md-4 col-xs-6" >
                    <
                    div className = "wow fadeInUp"
                    data_wow_duration = "400ms"
                    data_wow_delay = "0ms" >
                    <
                    div className = "icon-circle" >
                    <
                    span > 1 < /span> <
                    i className = "fa fa-coffee fa-2x" > < /i> < /
                    div > <
                    h3 > MEET < /h3> < /
                    div > <
                    /div> <
                    div className = "col-md-2 col-md-4 col-xs-6" >
                    <
                    div className = "wow fadeInUp"
                    data_wow_duration = "400ms"
                    data_wow_delay = "100ms" >
                    <
                    div className = "icon-circle" >
                    <
                    span > 2 < /span> <
                    i className = "fa fa-bullhorn fa-2x" > < /i> < /
                    div > <
                    h3 > PLAN < /h3> < /
                    div > <
                    /div> <
                    div className = "col-md-2 col-md-4 col-xs-6" >
                    <
                    div className = "wow fadeInUp"
                    data_wow_duration = "400ms"
                    data_wow_delay = "200ms" >
                    <
                    div className = "icon-circle" >
                    <
                    span > 3 < /span> <
                    i className = "fa fa-image fa-2x" > < /i> < /
                    div > <
                    h3 > DESIGN < /h3> < /
                    div > <
                    /div> <
                    div className = "col-md-2 col-md-4 col-xs-6" >
                    <
                    div className = "wow fadeInUp"
                    data_wow_duration = "400ms"
                    data_wow_delay = "300ms" >
                    <
                    div className = "icon-circle" >
                    <
                    span > 4 < /span> <
                    i className = "fa fa-heart fa-2x" > < /i> < /
                    div > <
                    h3 > DEVELOP < /h3> < /
                    div > <
                    /div> <
                    div className = "col-md-2 col-md-4 col-xs-6" >
                    <
                    div className = "wow fadeInUp"
                    data_wow_duration = "400ms"
                    data_wow_delay = "400ms" >
                    <
                    div className = "icon-circle" >
                    <
                    span > 5 < /span> <
                    i className = "fa fa-shopping-cart fa-2x" > < /i> < /
                    div > <
                    h3 > TESTING < /h3> < /
                    div > <
                    /div> <
                    div className = "col-md-2 col-md-4 col-xs-6" >
                    <
                    div className = "wow fadeInUp"
                    data_wow_duration = "400ms"
                    data_wow_delay = "500ms" >
                    <
                    div className = "icon-circle" >
                    <
                    span > 6 < /span> <
                    i className = "fa fa-space-shuttle fa-2x" > < /i> < /
                    div > <
                    h3 > LAUNCH < /h3> < /
                    div > <
                    /div> < /
                    div > <
                    /div> < /
                    section >

                    <
                    div className = "row" >
                    <
                    div className = "col-sm-4" >
                    <
                    h3 className = "column-title" > Our Skills < /h3> <
                    strong > GRAPHIC DESIGN < /strong> <
                    div className = "progress" >
                    <
                    div className = "progress-bar progress-bar-primary"
                    role = "progressbar"
                    data - width = "85" > 85 % < /div> < /
                    div > <
                    strong > WEB DESIGN < /strong> <
                    div className = "progress" >
                    <
                    div className = "progress-bar progress-bar-primary"
                    role = "progressbar"
                    data - width = "70" > 70 % < /div> < /
                    div > <
                    strong > WORDPRESS DEVELOPMENT < /strong> <
                    div className = "progress" >
                    <
                    div className = "progress-bar progress-bar-primary"
                    role = "progressbar"
                    data - width = "90" > 90 % < /div> < /
                    div > <
                    strong > JOOMLA DEVELOPMENT < /strong> <
                    div className = "progress" >
                    <
                    div className = "progress-bar progress-bar-primary"
                    role = "progressbar"
                    data - width = "65" > 65 % < /div> < /
                    div > <
                    /div>

                    <
                    div className = "col-sm-4" >
                    <
                    h3 className = "column-title" > Our History < /h3> <
                    div role = "tabpanel" >
                    <
                    ul className = "nav main-tab nav-justified"
                    role = "tablist" >
                    <
                    li role = "presentation"
                    className = "active" >
                    <
                    a href = "#tab1"
                    role = "tab"
                    data - toggle = "tab"
                    aria - controls = "tab1"
                    aria - expanded = "true" > 2007 < /a> < /
                    li > <
                    li role = "presentation" >
                    <
                    a href = "#tab2"
                    role = "tab"
                    data - toggle = "tab"
                    aria - controls = "tab2"
                    aria - expanded = "false" > 2010 < /a> < /
                    li > <
                    li role = "presentation" >
                    <
                    a href = "#tab3"
                    role = "tab"
                    data - toggle = "tab"
                    aria - controls = "tab3"
                    aria - expanded = "false" > 2013 < /a> < /
                    li > <
                    li role = "presentation" >
                    <
                    a href = "#tab4"
                    role = "tab"
                    data - toggle = "tab"
                    aria - controls = "tab4"
                    aria - expanded = "false" > 2018 < /a> < /
                    li > <
                    /ul> <
                    div id = "tab-content"
                    className = "tab-content" >
                    <
                    div role = "tabpanel"
                    className = "tab-pane fade active in"
                    id = "tab1"
                    aria - labelledby = "tab1" >
                    <
                    p > We started work with the development in different technology to solve the business challenges using business logic. < /p> <
                    p > The trends were changing from development to automations,
                    so we started to grasp new technologies. < /p> < /
                    div > <
                    div role = "tabpanel"
                    className = "tab-pane fade"
                    id = "tab2"
                    aria - labelledby = "tab2" >
                    <
                    p > As per server concern linux is the best,
                    so we are using linux and other open sources
                    for developement purpose. < /p> <
                    p > Implementation in the open sources gives us freedom to move as per our business logic without any vendor locking. < /p> < /
                    div > <
                    div role = "tabpanel"
                    className = "tab-pane fade"
                    id = "tab3"
                    aria - labelledby = "tab3" >
                    <
                    p > The cloud chages the trend like anything,
                    it gives lot of options with 11 9 security and scalibility as well. < /p> <
                    p > It 's very easy to deploy the infra with the componetns of the cloud as per requirements and it'
                    s cost effective. < /p> < /
                    div > <
                    div role = "tabpanel"
                    className = "tab-pane fade"
                    id = "tab4"
                    aria - labelledby = "tab3" >
                    <
                    p > The combination of the cloud and hadoop helps to increase the productivity in the business with ease and costs. < /p> <
                    p > Hadoop has a new approch to do the processing of the data both at rest and in motion,
                        It has a perfect echo system. < /p> < /
                    div > <
                    /div> < /
                    div > <
                    /div>

                    <
                    div className = "col-sm-4" >
                    <
                    h3 className = "column-title" > Why is the ? < /h3> <
                    div className = "panel-group"
                    id = "accordion"
                    role = "tablist"
                    aria - multiselectable = "true" >
                    <
                    div className = "panel panel-default" >
                    <
                    div className = "panel-heading"
                    role = "tab"
                    id = "headingOne" >
                    <
                    h4 className = "panel-title" >
                    <
                    a data - toggle = "collapse"
                    data - parent = "#accordion"
                    href = "#collapseOne"
                    aria - expanded = "true"
                    aria - controls = "collapseOne" >
                    Why Cloud ?
                    <
                    /a> < /
                    h4 > <
                    /div> <
                    div id = "collapseOne"
                    className = "panel-collapse collapse in"
                    role = "tabpanel"
                    aria - labelledby = "headingOne" >
                    <
                    div className = "panel-body" >
                    The Cloud gives us scalability,
                    flexibility and security. <
                    /div> < /
                    div > <
                    /div> <
                    div className = "panel panel-default" >
                    <
                    div className = "panel-heading"
                    role = "tab"
                    id = "headingTwo" >
                    <
                    h4 className = "panel-title" >
                    <
                    a className = "collapsed"
                    data - toggle = "collapse"
                    data - parent = "#accordion"
                    href = "#collapseTwo"
                    aria - expanded = "false"
                    aria - controls = "collapseTwo" >
                    Why Big Data ?
                    <
                    /a> < /
                    h4 > <
                    /div> <
                    div id = "collapseTwo"
                    className = "panel-collapse collapse"
                    role = "tabpanel"
                    aria - labelledby = "headingTwo" >
                    <
                    div className = "panel-body" >
                    Per person number of devices are incresing,
                    every business is trying to improve the productivity,
                    it is important to collect the data. <
                    /div> < /
                    div > <
                    /div> <
                    div className = "panel panel-default" >
                    <
                    div className = "panel-heading"
                    role = "tab"
                    id = "headingThree" >
                    <
                    h4 className = "panel-title" >
                    <
                    a className = "collapsed"
                    data - toggle = "collapse"
                    data - parent = "#accordion"
                    href = "#collapseThree"
                    aria - expanded = "false"
                    aria - controls = "collapseThree" >
                    Why Hadoop and ML ?
                    <
                    /a> < /
                    h4 > <
                    /div> <
                    div id = "collapseThree"
                    className = "panel-collapse collapse"
                    role = "tabpanel"
                    aria - labelledby = "headingThree" >
                    <
                    div className = "panel-body" >
                    An approch suitable to solve big data and its processing. <
                    /div> < /
                    div > <
                    /div> < /
                    div > <
                    /div>

                    <
                    /div> < /
                    div > <
                    /section>
                    // /#meet-team--


                    <
                    section id = "animated-number" >
                    <
                    div className = "container" >
                    <
                    div className = "section-header" >
                    <
                    h2 className = "section-title text-center wow fadeInDown" > Partners < /h2> <
                    p className = "text-center wow fadeInDown" > Can work better with the open sources,
                    only the thing is that they required a skillset to perform the task < br / > Future is on the cloud so everyone is trying to achieve the future as much as they can < /p> < /
                    div > <
                    div className = "partner"
                    id = "partner" >
                    <
                    div className = "container" >
                    <
                    div className = "row" >


                    <
                    div className = "col-md-3 col-md-3" >
                    <
                    img src = "images/amazon.png"
                    className = "img-responsive" / >
                    <
                    /div>

                    <
                    div className = "col-md-3 col-md-3" >
                    <
                    img src = "images/cloudera.png"
                    className = "img-responsive" / >
                    <
                    /div>

                    <
                    div className = "col-md-3 col-md-3" >
                    <
                    img src = "images/hortnworks.png"
                    className = "img-responsive" / >
                    <
                    /div>

                    <
                    div className = "col-md-3 col-md-3" >
                    <
                    img src = "images/mapr.png"
                    className = "img-responsive" / >
                    <
                    /div>

                    <
                    /div> < /
                    div > <
                    /div>

                    <
                    /section>


                    <
                    section id = "blog" >
                    <
                    div className = "container" >
                    <
                    div className = "section-header" >
                    <
                    h2 className = "section-title text-center wow fadeInDown" > Careers < /h2> <
                    p className = "text-center wow fadeInDown" > Cloud Technology creating dominance in the industry to provide the quick services to run the business as per demand < br / > all open sources like hadoop has there value in the future. < /p> < /
                    div >

                    <
                    div className = "row" >
                    <
                    div className = "col-sm-6" >
                    <
                    div className = "blog-post blog-large wow fadeInLeft"
                    data_wow_duration = "300ms"
                    data_wow_delay = "0ms" >
                    <
                    article >
                    <
                    header className = "entry-header" >
                    <
                    div className = "entry-thumbnail" >
                    <
                    img className = "img-responsive"
                    src = "images/blog/01.jpg"
                    alt = "" / >
                    <
                    span className = "post-format post-format-video" > < i className = "fa fa-film" > < /i></span >
                    <
                    /div> <
                    div className = "entry-date" > 25 November 2014 < /div> <
                    h2 className = "entry-title" > < a href = "#" > While now the fated Pequod had been so long afloat this < /a></h
                    2 >
                    <
                    /header>

                    <
                    div className = "entry-content" >
                    <
                    P > With a blow from the top - maul Ahab knocked off the steel head of the lance,
                    and then handing to the mate the long iron rod remaining,
                    bade him hold it upright,
                    without its touching off the steel head of the lance,
                    and then handing to the mate the long iron rod remaining.without its touching off the steel without its touching off the steel < /P> <
                    a className = "btn btn-primary"
                    href = "#" > Read More < /a> < /
                    div >

                    <
                    footer className = "entry-meta" >
                    <
                    span className = "entry-author" > < i className = "fa fa-pencil" > < /i> <a href="#">Victor</a > < /span> <
                    span className = "entry-category" > < i className = "fa fa-folder-o" > < /i> <a href="#">Tutorial</a > < /span> <
                    span className = "entry-comments" > < i className = "fa fa-comments-o" > < /i> <a href="#">15</a > < /span> < /
                    footer > <
                    /article> < /
                    div > <
                    /div>
                    //  --col-sm-6--
                    <
                    div className = "col-sm-6" >
                    <
                    div className = "blog-post blog-media wow fadeInRight"
                    data_wow_duration = "300ms"
                    data_wow_delay = "100ms" >
                    <
                    article className = "media clearfix" >
                    <
                    div className = "entry-thumbnail pull-left" >
                    <
                    img className = "img-responsive"
                    src = "images/blog/02.jpg"
                    alt = "" / >
                    <
                    span className = "post-format post-format-gallery" > < i className = "fa fa-image" > < /i></span >
                    <
                    /div> <
                    div className = "media-body" >
                    <
                    header className = "entry-header" >
                    <
                    div className = "entry-date" > 01 December 2014 < /div> <
                    h2 className = "entry-title" > < a href = "#" > BeReviews was a awesome envent in dhaka < /a></h
                    2 >
                    <
                    /header>

                    <
                    div className = "entry-content" >
                    <
                    P > With a blow from the top - maul Ahab knocked off the steel head of the lance,
                    and then handing to the steel < /P> <
                    a className = "btn btn-primary"
                    href = "#" > Read More < /a> < /
                    div >

                    <
                    footer className = "entry-meta" >
                    <
                    span className = "entry-author" > < i className = "fa fa-pencil" > < /i> <a href="#">Campbell</a > < /span> <
                    span className = "entry-category" > < i className = "fa fa-folder-o" > < /i> <a href="#">Tutorial</a > < /span> <
                    span className = "entry-comments" > < i className = "fa fa-comments-o" > < /i> <a href="#">15</a > < /span> < /
                    footer > <
                    /div> < /
                    article > <
                    /div> <
                    div className = "blog-post blog-media wow fadeInRight"
                    data_wow_duration = "300ms"
                    data_wow_delay = "200ms" >
                    <
                    article className = "media clearfix" >
                    <
                    div className = "entry-thumbnail pull-left" >
                    <
                    img className = "img-responsive"
                    src = "images/blog/03.jpg"
                    alt = "" / >
                    <
                    span className = "post-format post-format-audio" > < i className = "fa fa-music" > < /i></span >
                    <
                    /div> <
                    div className = "media-body" >
                    <
                    header className = "entry-header" >
                    <
                    div className = "entry-date" > 03 November 2014 < /div> <
                    h2 className = "entry-title" > < a href = "#" > Play list of old bangle music and gajal < /a></h
                    2 >
                    <
                    /header>

                    <
                    div className = "entry-content" >
                    <
                    P > With a blow from the top - maul Ahab knocked off the steel head of the lance,
                    and then handing to the steel < /P> <
                    a className = "btn btn-primary"
                    href = "#" > Read More < /a> < /
                    div >

                    <
                    footer className = "entry-meta" >
                    <
                    span className = "entry-author" > < i className = "fa fa-pencil" > < /i> <a href="#">Ruth</a > < /span> <
                    span className = "entry-category" > < i className = "fa fa-folder-o" > < /i> <a href="#">Tutorial</a > < /span> <
                    span className = "entry-comments" > < i className = "fa fa-comments-o" > < /i> <a href="#">15</a > < /span> < /
                    footer > <
                    /div> < /
                    article > <
                    /div> < /
                    div > <
                    /div>

                    <
                    /div> < /
                    section >

                    <
                    section id = "get-in-touch" >
                    <
                    div className = "container" >
                    <
                    div className = "section-header" >
                    <
                    h2 className = "section-title text-center wow fadeInDown" > Pure Cloud Pure Business < /h2> <
                    p className = "text-center wow fadeInDown" > Welcome to the future : In the Cloud < /p> < /
                    div > <
                    /div> < /
                    section >
                    // /#get-in-touch--

                    <
                    section id = "contact" >
                    <
                    div id = "google-map"
                    style = "height:650px" > < iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8369027921717!2d73.93103321477504!3d18.491045487426206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1ffdb087c2d%3A0x56038c463682d521!2sVirtuous+Soft+Solutions!5e0!3m2!1sen!2sin!4v1535016659827"
                    width = "850"
                    height = "600"
                    frameborder = "0"
                    style = "border:0"
                    allowfullscreen > < /iframe> </div >
                    <
                    div className = "container-wrapper" >
                    <
                    div className = "container" >
                    <
                    div className = "row" >
                    <
                    div className = "col-sm-4 col-sm-offset-8" >
                    <
                    div className = "contact-form" >
                    <
                    h3 > Contact Info < /h3>

                    <
                    address >
                    <
                    strong > U.S.A. < br / >
                    <
                    strong > Alexandria Bay,
                    NY. < br / >
                    <
                    strong > phone : +1 315 215 1308 < br / >

                    <
                    strong > India < br / >
                    <
                    strong > Vishal Park I,
                    Near Binawat Township,
                    Kalepadl Road < br / >
                    <
                    strong > Sasane Nagar,
                    Hadapsar,
                    Pune– 411028 < br / >
                    <
                    strong > phone : +91 - 20 - 26825205 < br / >
                    <
                    /address>

                    <
                    form id = "main-contact-form"
                    name = "contact-form"
                    method = "post"
                    action = "#" >
                    <
                    div className = "form-group" >
                    <
                    input type = "text"
                    name = "name"
                    className = "form-control"
                    placeholder = "Name"
                    required / >
                    <
                    /div> <
                    div className = "form-group" >
                    <
                    input type = "email"
                    name = "email"
                    className = "form-control"
                    placeholder = "Email"
                    required / >
                    <
                    /div> <
                    div className = "form-group" >
                    <
                    input type = "text"
                    name = "subject"
                    className = "form-control"
                    placeholder = "Subject"
                    required / >
                    <
                    /div> <
                    div className = "form-group" >
                    <
                    textarea name = "message"
                    className = "form-control"
                    rows = "8"
                    placeholder = "Message"
                    required > < /textarea> < /
                    div > <
                    button type = "submit"
                    className = "btn btn-primary" > Send Message < /button> < /
                    form > <
                    /div> < /
                    div > <
                    /div> < /
                    div > <
                    /div> < /
                    section >
                    // /#bottom--

                    <
                    footer id = "footer" >
                    <
                    div className = "container" >
                    <
                    div className = "row" >
                    <
                    div className = "col-sm-6" >
                    &
                    copy; 2018 SkyAge IT Services Pvt.Ltd..Designed by Team < a target = "_blank"
                    href = "http://skyage.in/"
                    title = "skyage.in" > www.skyage.in < /a> < /
                    div > <
                    div className = "col-sm-6" >
                    <
                    ul className = "social-icons" >
                    <
                    li > < a href = "#" > < i className = "fa fa-facebook" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-twitter" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-google-plus" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-pinterest" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-dribbble" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-behance" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-flickr" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-youtube" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-linkedin" > < /i></a > < /li> <
                    li > < a href = "#" > < i className = "fa fa-github" > < /i></a > < /li> < /
                    ul > <
                    /div> < /
                    div > <
                    /div> < /
                    footer >




                    <
                    /section> */
        }










        <
        /Fragment >

    );
}

export default Skyage;