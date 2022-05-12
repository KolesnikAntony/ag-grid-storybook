import { createServer, Model } from 'miragejs';
import { billingDemi, getCases } from './demi';

export function makeServer() {
  return createServer({
    models: {
      billing: Model,
      case: Model,
    },

    seeds(server) {
      billingDemi().forEach((el) => server.create('billing', el));
      getCases().forEach((el) => server.create('case', el));
    },
    routes() {
      // this.namespace = 'api';

      this.get('/cases', (schema) => {
        // const { queryParams } = request;
        return schema.cases.all();
      });

      this.get(
        '/billings',
        (schema, request) => {
          const { queryParams } = request;

          console.log(queryParams);
          if (Object.values(queryParams).length === 0) {
            return schema.billings.all();
          } else {
            let uid = queryParams.uid && Number(queryParams.uid);
            let uidC = queryParams.uidC;
            let number = queryParams.number && Number(queryParams.number);
            let numberC = queryParams.numberC;
            // let creation = queryParams.creation;
            // let creationC = queryParams.creationC;
            // let due = queryParams.due;
            // let dueC = queryParams.dueC;
            // let client = queryParams.customer;
            // let provider = queryParams.provider;
            // let guarantor = queryParams.debtor;
            // let refund = queryParams.refund;
            // let total = queryParams.total && Number(queryParams.total);
            // let totalC = queryParams.totalC;
            // let open = request.queryParams.open && Number(queryParams.open);
            // let openC = queryParams.openC;
            // let paid = request.queryParams.paid && Number(queryParams.paid);
            // let paidC = queryParams.paidC;
            // let sent = queryParams.sent;
            // let sentDate = queryParams.sentDate;
            // let sentDateC = queryParams.sentDateC;
            // let status = queryParams.status;

            const calcCustom = (type, valueDB, value) => {
              if (type === 'equals') {
                return value ? valueDB === value : true;
              }
              if (type === 'more') {
                return value ? valueDB < value : true;
              }
              if (type === 'less') {
                return value ? valueDB > value : true;
              }
              return true;
            };

            // const include = (strDB, strReq) => {
            //   return strReq ? strDB.toLowerCase().includes(strReq?.toLowerCase()) : true;
            // };
            //
            // const revers = (date) => {
            //   if (date) {
            //     return date.split('.').reverse().join('-');
            //   }
            // };

            return schema.billings.where((b) => {
              return (
                //NUMBER
                calcCustom(numberC, b.number.value, number) &&
                //UID
                calcCustom(uidC, b.uid.value, uid)
                //CREATION
                // calcCustom(
                //   creationC,
                //   new Date(revers(b.creation)).valueOf(),
                //   creation && new Date(creation).valueOf()
                // )
                //CLIENT
                // include(b.customer.name, client)
                //PROVIDER
                // include(b.provider, provider)
                // //GUARANTOR
                // include(b.guarantor.name, guarantor) &&
                // //REFUND
                // (refund ? b.guarantor.type.toLowerCase() === refund.toLowerCase() : true) &&
                // //TOTAL
                // calcCustom(totalC, b.total, total) &&
                // //OPEN
                // calcCustom(openC, b.open, open) &&
                // //DUE
                // calcCustom(dueC, new Date(revers(b.due)).valueOf(), due && new Date(due).valueOf()) &&
                // //SENT
                // (sent ? b.copy.name === sent : true) &&
                // //SENT DATA
                // calcCustom(
                //   sentDateC,
                //   b.copy.date && new Date(revers(b.copy.date)).valueOf(),
                //   sentDate && new Date(sentDate).valueOf()
                // ) &&
                // //STATUS
                // (status?.length ? status.includes(b.status.name) : true)
              );
            });
          }
        },
        {
          timing: 1000,
        }
      );
    },
  });
}
