import Orders from '../models/Order.js';
import { fetchInAccount, fetchInPayment } from '../fetchs/fetchForOtherApis.js';

class ordersController {
    static findAllOrders = (_req, res) => {
        Orders.find((_err, allOrders) => res.status(200).json(allOrders));
    };

    static findOrderById = (req, res) => {
        const { id } = req.params;
        Orders.findById(id, (err, order) => {
            if (err) {
                return res.status(404).send({ message: err.message });
            } else {
                return res.status(200).json(order);
            }
        });
    };
    
    static createOrder = (req, res) => {
        const newInfo = { ...req.body, status: "FULFILLED", createdDate: Date() };
        const ObjOrder = new Orders(newInfo);
        ObjOrder.save((err, order) => {
            if (err) {
                return res.status(400).send({ message: err.message });
            } else {
                return res.status(201).set('Location', `/admin/orders/${order.id}`).json(ObjOrder);
            }
        });
    };

    // async
    static confirmOrder = async (req, res) => {
        const { id } = req.params;
        const { idPayment } = req.body;
    
        Orders.findByIdAndUpdate(id, { $set: { status: 'PAID' } }, { new: true }, (err, order) => {
            if (err) {
                return res.status(400).set('Location', `/admin/orders/${order.id}`).send({ message: err.message });
            } else {
                return res.status(200).send({ message: `Order -${id}- successfully updated.` });
          }
        });
    
        Orders.findById(id, async (err, order) => {
          if (err) {
            res.status(400).send({ message: err.message });
          } else {
            const { name, cpf, address } = await fetchInAccount(order.clientId);
            const payload = { name, cpf, address, items: order.items };
            await fetchInPayment(payload, idPayment);
          }
        });
      };

};

export default ordersController;
