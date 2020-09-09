import Sendsay from "sendsay-api";

const sendsay = new Sendsay({
    auth: {
        login: 'stoshich.sasha@mail.ru',
        password: 'iphu8Room'
    }
});

export const fetchLogin = async() => {
    const res = await sendsay.request({
        action: 'sys.settings.get',
        list: [
            'about.confirm',
            'about.id',
            'about.label.member',
            'about.name',
            'about.open.dt',
            'about.open.visitor',
            'about.owner.email',
            'about.tarif',
            'about.user',
            'anketa.id.base',
            'anketa.id.custom',
            'interface.type',
            'interface.type.user',
            'issue.email.sender.moderation',
            'issue.pte.datakey',
            'lbac.inuse',
            'lbac.on',
            'member.hard.limit',
            'member.hard.rest',
            'member.noconfirm.limit',
            'member.noconfirm.rest',
            'pase.autopayment',
            'pase.destination',
            'pase.left',
            'pase.state',
            'about.chat.on',
        ],
    })
    return res
}