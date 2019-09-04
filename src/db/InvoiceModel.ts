import DataModel from './DataModel'
import { InvoiceInput } from '../modules/generated'

export default class InvoiceModel extends DataModel {
  async create(invoice: InvoiceInput) {
    const { date, clientId, items } = invoice

    // https://wesbos.com/destructuring-renaming/
    const { id: invoiceId } = await this.connection
      .insert({ date, clientId })
      .into('invoice')
      .returning('*')

    const itemsWithInvoiceId = items.map(item => {
      const { id: itemId, ...otherItemKeys } = item

      return { ...otherItemKeys, invoiceId, itemId }
    })

    await this.connection.insert(itemsWithInvoiceId).into('invoiceItem')
  }
}
