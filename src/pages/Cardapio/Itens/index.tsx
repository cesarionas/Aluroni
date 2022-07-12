import cardapio from './itens.json'
import Item from './Item'
import styles from './itens.module.scss';
export default function Itens() {
    return(
        <div className={styles.itens}>
            {cardapio.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}