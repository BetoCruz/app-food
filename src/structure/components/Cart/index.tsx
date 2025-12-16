import {
  CardItem,
  CardItemTitle,
  CartContainer,
  TotalValueContainer,
  Button,
  Form,
  Final,
  FinalButton,
  DivButtons,
  CreditCardNumberCvv,
  CreditCarMonthYear
} from './styles'
import lataDeLixo from '../../../assets/imagesEfood/lata_de_lixo.png'
import { RootReducer } from '../../../store/index'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearCart, removeItem } from '../../../store/reducers/cart'

export type Props = {
  isActive?: boolean
  onOffCart: boolean
  activeModal: (value: boolean) => void
  toggleIsActive: (value: boolean) => void
}

const Cart = ({ isActive, onOffCart, activeModal, toggleIsActive }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [start, setStart] = useState(true)
  const [order, setOrder] = useState(false)
  const [delivery, setDelivery] = useState(false)
  const [conclusion, setConclusion] = useState(false)
  const dispatch = useDispatch()

  const CleanShoppingCart = () => {
    dispatch(clearCart())
  }

  const TotalValue = () => {
    return items.reduce((acc, item) => {
      return acc + (item.preco || 0)
    }, 0)
  }

  const removeItemCart = (id: number) => {
    dispatch(removeItem(id))
  }

  return (
    <>
      {/* <OverlayCart isActive={isActive} onClick={() => toggleIsActive(false)} /> */}
      <CartContainer isActive={isActive}>
        {start && (
          <>
            <div>
              {items.map((item) => (
                <CardItem key={item.id}>
                  <img src={item.foto} alt="" />
                  <CardItemTitle>
                    <h2>{item.nome}</h2>
                    <h3>{item.preco}</h3>
                  </CardItemTitle>
                  <img
                    onClick={() => removeItemCart(item.id!)}
                    src={lataDeLixo}
                    alt=""
                  />
                </CardItem>
              ))}
            </div>
            <section>
              <TotalValueContainer>
                <div>
                  <h3>Valor total</h3>
                  <span>{`R$ ${TotalValue()}`}</span>
                </div>
                <Button
                  onClick={() => {
                    setStart(false), setOrder(true)
                    // setStart(false), setOrder(true), activeModal(true)
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

              <label htmlFor="nome">Quem irá receber</label>
              <input type="text" id="nome" placeholder="" />
              <label htmlFor="endereco">Endereço</label>
              <input type="text" placeholder="" />
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="cidade" placeholder="" />
              <section>
                <div>
                  <label htmlFor="cep">CEP</label>
                  <input type="text" id="cep" placeholder="" />
                </div>
                <div>
                  <label htmlFor="numero">Número</label>
                  <input type="number" id="numero" placeholder="" />
                </div>
              </section>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input type="text" id="complemento" placeholder="" />
              <DivButtons>
                <Button type="submit">Continuar com o pagamento</Button>
                <Button
                  onClick={() => {
                    setOrder(false), setStart(true)
                    // setOrder(false), setStart(true), activeModal(false)
                  }}
                  type="submit"
                >
                  Voltar para o carriho
                </Button>
              </DivButtons>
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
              <h3>Pagamento - Valor a pagar R$ {`R$ ${TotalValue()}`}</h3>

              <label htmlFor="nome">Nome no cartão</label>
              <input type="text" id="nome" placeholder=" " />
              <CreditCardNumberCvv>
                <div>
                  <label htmlFor="endereco">Número do cartão</label>
                  <input type="text" placeholder="" />
                </div>
                <div>
                  <label htmlFor="cidade">CVV</label>
                  <input type="text" id="cidade" placeholder="" />
                </div>
              </CreditCardNumberCvv>
              <CreditCarMonthYear>
                <div>
                  <label htmlFor="cep">Mês de vencimento</label>
                  <input type="text" id="cep" placeholder="" />
                </div>
                <div>
                  <label htmlFor="numero">Ano de vencimento</label>
                  <input type="number" id="numero" placeholder="" />
                </div>
              </CreditCarMonthYear>
              <div>
                <Button type="submit">Finalizar Pagamento</Button>
                <Button
                  onClick={() => {
                    setDelivery(false), setOrder(true)
                  }}
                  type="submit"
                >
                  Voltar para a edição de endereço
                </Button>
              </div>
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
            <FinalButton onClick={() => CleanShoppingCart()} to={'/'}>
              Concluir
            </FinalButton>
          </Final>
        )}
      </CartContainer>
    </>
  )
}

export default Cart
