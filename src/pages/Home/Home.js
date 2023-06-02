import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.landing}>
      <img className={styles.landingChild} alt="" src="/group-2.svg" />
      <div className={styles.empowerYourBusiness}>
        Empower Your Business with Powerful Ecommerce Solutions: Build, Manage
        and Grow Your Online Store with Ease
      </div>
      <img
        className={styles.stockMarketGrowth3dIllustr}
        alt=""
        src="/stock-market-growth-3d-illustration@2x.png"
      />
      <b className={styles.buildYourEcommerce}>
        Build Your Ecommerce Website and Watch Your Business Grow
      </b>
      <div className={styles.landingItem} />
      <b className={styles.empoweringYourEcommerceContainer}>
        <p className={styles.empoweringYourEcommerce}>
          Empowering Your Ecommerce Business for Success
        </p>
      </b>
      <div className={styles.logo1Parent}>
        <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
        <a href="" className={styles.solutions}>Solutions</a>
        <a href="/login" className={styles.login}>Login</a>
        <a href="" className={styles.resources}>Resources</a>
        <a href="" className={styles.pricing}>Pricing</a>
        <div className={styles.getStarted1}>
          <div className={styles.getStarted1Child} />
          <a href="/signup" className={styles.getStarted}>Get Started</a>
        </div>
      </div>
      <div className={styles.getStarted2}>
        <div className={styles.getStarted2Child} />
        <a href="/signup" className={styles.startYourJourney}>Start Your Journey</a>
      </div>
      <div className={styles.landingInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.features}>
        <div className={styles.feature1}>
          <div className={styles.feature1Child} />
          <div className={styles.ourDragAndContainer}>
            <p className={styles.empoweringYourEcommerce}>
              {" "}
              Our drag and drop website builder makes it easy to create a
              professional-looking ecommerce website without any coding
              knowledge. Choose from customizable themes and templates or start
              from scratch.
            </p>
          </div>
          <b className={styles.easyWebsiteBuilder}>EASY WEBSITE BUILDER</b>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.objectother03Icon}
              alt=""
              src="/objectother-03@2x.png"
            />
          </div>
        </div>
        <div className={styles.feature2}>
          <div className={styles.feature2Child} />
          <b className={styles.managementTools}>Management Tools</b>
          <img className={styles.feature2Item} alt="" src="/group-4.svg" />
          <div className={styles.manageYourInventoryContainer}>
            <p className={styles.empoweringYourEcommerce}>
              Manage your inventory, orders, shipping, and a all in one place.
              Our built-in analytics and reporting tools let you track your
              sales and customer behavior, so you can make informed decisions to
              grow your business.
            </p>
          </div>
          <img
            className={styles.objectother08Icon}
            alt=""
            src="/objectother-08@2x.png"
          />
        </div>
        <div className={styles.feature3}>
          <div className={styles.feature1Child} />
          <b className={styles.marketingAndSeo}>Marketing and SEO Support</b>
          <img className={styles.feature2Item} alt="" src="/group-5.svg" />
          <div className={styles.fromEmailCampaigns}>
            From email campaigns to social media advertising, we offer a variety
            of marketing tools to help you reach your target audience and
            increase your sales. Our SEO optimization tools help you get found
            on search engines and drive traffic to your website.
          </div>
          <img
            className={styles.objectother07Icon}
            alt=""
            src="/objectother-07@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.arrowIcon0111}
        alt=""
        src="/arrowicon01-1-1@2x.png"
      />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-7.svg" />
      <div className={styles.logo1Group}>
        <img className={styles.logo1Icon} alt="" src="/logo-12@2x.png" />
        <div className={styles.intra}>
          <a href="" className={styles.intra1}>INTRA</a>
          <a href="" className={styles.home}>Home</a>
          <div className={styles.about}>
            <a href="" className={styles.empoweringYourEcommerce}>About</a>
          </div>
          <a href="" className={styles.contact}>Contact</a>
        </div>
        <div className={styles.solutions1}>
          <a href="" className={styles.intra1}>Solutions</a>
          <a  href=""className={styles.home}>Website Builder</a>
          <a href="" className={styles.storeBuilder}>Store Builder</a>
          <a href="" className={styles.examples}>Examples</a>
        </div>
        <div className={styles.support}>
          <a href="" className={styles.intra1}>Support</a>
          <a href="" className={styles.helpCenter}>Help Center</a>
          <div className={styles.community}>
            <a href="" className={styles.empoweringYourEcommerce}>Community</a>
            <p className={styles.empoweringYourEcommerce}>&nbsp;</p>
          </div>
          <a href="" className={styles.contact}>24/7 Support</a>
        </div>
      </div>
      <b className={styles.fromBuildingYour}>
        From building your site to managing your business, we are here to
        support you
      </b>
      <b className={styles.checkOutOur}>Check out our pricing</b>
      <div className={styles.landingChild1} />
      <div
        className={styles.readyToStart}
      >{`Ready To Start Your Journey?    `}</div>
      <div className={styles.userFriendlyInterfaceWithContainer}>
        <ul className={styles.userFriendlyInterfaceWithE}>
          <li className={styles.userFriendlyInterfaceWith}>
            User-friendly interface with easy drag-and-drop tools
          </li>
          <li className={styles.userFriendlyInterfaceWith}>
            Customizable templates to match your brand
          </li>
          <li className={styles.userFriendlyInterfaceWith}>
            Mobile responsive design for optimized viewing on any device
          </li>
          <li>Multiple payment and shipping options</li>
        </ul>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
    </div>
  );
};

export default Home;
