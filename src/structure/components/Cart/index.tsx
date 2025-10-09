import {
  CardItem,
  CardItemTitle,
  CartContainer,
  TotalValueContainer,
  Button,
  Form,
  Final,
  FinalButton
  // Modal
} from './styles'
import lataDeLixo from '../../../assets/imagesEfood/lata_de_lixo.png'
import { RootReducer } from '../../../store/index'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export type Props = {
  isActive?: boolean
  activeModal: (value: boolean) => void
}

const Cart = ({ isActive, activeModal }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [start, setStart] = useState(true)
  const [order, setOrder] = useState(false)
  const [delivery, setDelivery] = useState(false)
  const [conclusion, setConclusion] = useState(false)

  return (
    <>
      <CartContainer isActive={isActive}>
        {start && (
          <>
            <div>
              {items.map((item) => (
                <CardItem key={item.id}>
                  <img src={item.image} alt="" />
                  <CardItemTitle>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                  </CardItemTitle>
                  <img src={lataDeLixo} alt="" />
                </CardItem>
              ))}
            </div>
            <section>
              <TotalValueContainer>
                <div>
                  <h3>Valor total</h3>
                  <span>R$ 0,00</span>
                </div>
                <Button
                  onClick={() => {
                    setStart(false), setOrder(true), activeModal(true)
                  }}
                >
                  Continuar com a entrega
                </Button>
              </TotalValueContainer>
            </section>
          </>
        )}

        {order && (
          <>
            <Form
              onSubmit={() => {
                setDelivery(true), setOrder(false)
              }}
            >
              <h3>Entrega</h3>

              <label htmlFor="nome">Quem iráreceber</label>
              <input type="text" id="nome" placeholder="Nome Completo" />
              <label htmlFor="endereco">Endereço</label>
              <input type="text" placeholder="Endereço" />
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="cidade" placeholder="Cidade" />
              <section>
                <div>
                  <label htmlFor="cep">CEP</label>
                  <input type="text" id="cep" placeholder="CEP" />
                </div>
                <div>
                  <label htmlFor="numero">Número</label>
                  <input type="number" id="numero" placeholder="Número" />
                </div>
              </section>
              <label htmlFor="complemento">Complemento</label>
              <input type="text" id="complemento" placeholder="complemento" />
              <Button type="submit">Finalizar pedido</Button>
              <Button
                onClick={() => {
                  setOrder(false), setStart(true), activeModal(false)
                }}
                type="submit"
              >
                Voltar para o carriho
              </Button>
            </Form>
          </>
        )}

        {delivery && (
          <>
            <Form
              onSubmit={() => {
                setConclusion(true), setDelivery(false)
              }}
            >
              <h3>Pagamento - Valor a pagar R$ 190,90</h3>

              <label htmlFor="nome">Nome no cartão</label>
              <input type="text" id="nome" placeholder="Nome Completo" />
              <section>
                <div>
                  <label htmlFor="endereco">Número do cartão</label>
                  <input type="text" placeholder="0000000000000000" />
                </div>
                <div>
                  <label htmlFor="cidade">CVV</label>
                  <input type="text" id="cidade" placeholder="000" />
                </div>
              </section>
              <section>
                <div>
                  <label htmlFor="cep">Mês de vencimento</label>
                  <input type="text" id="cep" placeholder="" />
                </div>
                <div>
                  <label htmlFor="numero">Ano de vencimento</label>
                  <input type="number" id="numero" placeholder="" />
                </div>
              </section>

              <Button type="submit">Finalizar Pagamento</Button>
              <Button
                onClick={() => {
                  setDelivery(false), setOrder(true)
                }}
                type="submit"
              >
                Voltar para a edição de endereço
              </Button>
            </Form>
          </>
        )}

        {conclusion && (
          <Final>
            <h2>Pedido realizado - &#123; ORDER_ID &#125;</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <FinalButton to={'/'}>Concluir</FinalButton>
          </Final>
        )}
      </CartContainer>
    </>
  )
}

export default Cart
