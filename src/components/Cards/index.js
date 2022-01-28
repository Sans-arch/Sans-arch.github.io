import { CardsSection, CardsContainer, Card } from './styles';

export default function Cards() {
  return (
    <CardsSection>
        <h2>Tecnologias</h2>

        <CardsContainer>
          <Card>
            <i className="fab fa-css3-alt" />
          </Card>
          <Card>
            <i className="fab fa-html5" />
          </Card>
          <Card>
            <i className="fab fa-js-square" />
          </Card>
        </CardsContainer>
    </CardsSection>
  )
}