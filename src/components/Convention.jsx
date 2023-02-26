import React from "react";
import Event from "./Event";
import { Container, Row, Col } from "react-bootstrap";

const Convention = () => {
  return (
    <div className="Convention">
      <Container>
        <Row>
          <Col>
            <Event
              image="https://mobile-ssl.com/files/33/img/img_sld-1_2023_e.jpg"
              name="AnimeJapan"
              location="Tokyo, Japan"
              link="https://www.anime-japan.jp/en/"
            />
          </Col>
          <Col>
            <Event
              image="https://www.anime-expo.org/wp-content/uploads/2023/01/anime-expo-thumbnail.png"
              name="Anime Expo"
              location="Los Angeles, USA"
              link="https://www.anime-expo.org/"
            />
          </Col>
          <Col>
            <Event
              image="http://animematsuri.com/wp-content/uploads/2023/02/grb-coming-soon2.jpg"
              name="Anime Matsuri"
              location="Houston, USA"
              link="https://animematsuri.com"
            />
          </Col>
          <Col>
            <Event
              image="https://m.japan-expo.com/117652/dg1z1m1755_LL_b.jpg"
              name="Japan Expo"
              location="Paris, France"
              link="https://www.japan-expo-paris.com/en/"
            />
          </Col>
          <Col>
            <Event
              image="https://s3.amazonaws.com/a.nime.me/0059/7818/minni-logo.png"
              name="AniMinneapolis"
              location="Minnesota, USA"
              link="https://www.animinneapolis.com/"
            />
          </Col>
          <Col>
            <Event
              image="https://www.montrealcomiccon.com/wp-content/uploads/2018/05/share_mtl_en.jpg"
              name="Montreal Comiccon"
              location="Montreal, Canada"
              link="https://www.montrealcomiccon.com/en/"
            />
          </Col>
          <Col>
            <Event
              image="https://images.squarespace-cdn.com/content/v1/5bac77e27eb88c7bdcc25641/1578475572767-97KC7D7BMA8P15QNPPJY/StagePerformance01.png"
              name="Comic Fiesta"
              location="Kuala Lumpur, Malaysia"
              link="https://www.comicfiesta.org/"
            />
          </Col>
          <Col>
            <Event
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BCDzM_t7YjxpMqz6JwUSxdWkgkOyPqmIRA&usqp=CAU"
              name="Polymanga"
              location="Montreux, Switzerland"
              link="https://www.polymanga.com/EN"
            />
          </Col>
          <Col>
            <Event
              image="https://pbs.twimg.com/profile_images/1551643533785722880/nx59w7In_400x400.jpg"
              name="Sakura-Con"
              location="Seattle, USA"
              link="http://sakuracon.org/"
            />
          </Col>
          <Col>
            <Event
              image="https://fixr-cdn.fixr.co/images/event/2022-10/234bb3605caa465ba3f5a02e35e23336.jpeg"
              name="Animangapop"
              location="Glasgow, Newport, Brighton, and Plymouth"
              link="https://www.animangapop.co.uk/"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Convention;
