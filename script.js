

class TelephoneDirectory {
    department = '';
    task = '';
    name = '';
    title = '';
    extension = '';
    email = '';
    mobile = '';
    constructor (department, task, name, title, extension, email, mobile) {
        this.department=department;
        this.task=task;
        this.name=name;
        this.title=title;
        this.extension=extension;
        this.email=email;
        this.mobile=mobile;
    }
    getEmail(email) {
        return this.email + "@sartorius.co.kr";
    }
}

class Sartorian extends TelephoneDirectory {
    constructor (department, task, name, title, extension, email, mobile) {
        super(department, task, name, title, extension, email, mobile);
    }
}

let 김덕상 = new Sartorian('CEO', '대표이사', '김덕상', '사장', '5777', 'ds.kim@sartorius.co.kr', '010-6485-2000')
let 김우철 = new Sartorian('CEO', '부사장', '김우철', '부사장', '5790', 'woochul.kim@sartorius.co.kr', '010-9151-80030')

let 황범영 = new Sartorian('', '부사장', '황범영', '부사장', '0901', 'by.hwang@sartorius.co.kr', '010-3778-9105')

let 변순휘 = new Sartorian('BPS','KAM', '변순휘', '부장', '5702', 'klaus.byoun', '010-4227-3797');
let 최은형 = new Sartorian('BPS','KAM', '최은형', '부장', '5704', 'oliver.choi', '010-9926-3616');
let 장영석 = new Sartorian('BPS','KAM', '장영석', '부장', '5729', 'peter.jang', '010-6241-1945');
let 김산고 = new Sartorian('BPS','KAM', '김산고', '차장', '5712', 'piers.kim', '010-7325-1979');
let 김준영 = new Sartorian('BPS','KAM', '김준영', '과장', '5744', 'patrick.kim', '010-6871-0309');
let 차준영 = new Sartorian('BPS','KAM', '차준영', '대리', '5760', 'jaclyn.cha', '010-2470-6239');
let 임동섭 = new Sartorian('BPS','KAM', '임동섭', '대리', '5775', 'dustin.lim', '010-2993-4668');
let 방창현 = new Sartorian('BPS','KAM', '방창현', '대리', '5762', 'casper.bang', '010-9232-6838');


let 박성원 = new Sartorian('LPS','LSR', '박성원', '부장', '5720', 'leo.park', '010-8996-5376');
let 이준우 = new Sartorian('LPS','LSR', '이준우', '차장', '5725', 'eden.lee', '010-6291-7765');
let 권기원 = new Sartorian('LPS','LSR', '권기원', '과장', '5769', 'owen.kwon', '010-4811-1993');
let 장요한 = new Sartorian('LPS','LSR', '장요한', '과장', '5795', 'hans.jang', '010-4156-3783');
let 임선영 = new Sartorian('LPS','LSR', '임선영', '대리', '5785', 'chloe.lim', '010-6661-5287');
let 박대연 = new Sartorian('LPS','LSR', '박대연', '대리', '5791', 'felix.park', '010-4082-8013');
let 박예슬 = new Sartorian('LPS','LSR', '박예슬', '대리', '5776', 'hailey.park', '010-6546-5782');
let 최민석 = new Sartorian('LPS','LSR', '최민석', '대리', '5780', 'dwayne.choi', '010-5616-7025');
let 주이선 = new Sartorian('LPS','LSR', '주이선', '사원', '5707', 'esther.ju', '010-2923-5021');

let kam = [
    {id: 1, name: '변순휘', title: '부장', department: 'BPS', task: 'KAM', extension: '5704', email: 'klaus.byoun@sartorius.co.kr', ename: 'klaus.byoun', mobile: '010-4227-3797'},
    {id: 2, name: '장영석', title: '부장', department: 'BPS', task: 'KAM', extension: '5729', email: 'peter.jang@sartorius.co.kr', ename: 'peter.jang', mobile: '010-6241-1945'},
    {id: 3, name: '최은형', title: '부장', department: 'BPS', task: 'KAM', extension: '5704', email: 'oliver.choi@sartorius.co.kr', ename: 'oliver.choi', mobile: '010-9926-3616'},
    {id: 4, name: '김산고', title: '차장', department: 'BPS', task: 'KAM', extension: '5712', email: 'piers.kim@sartorius.co.kr', ename: 'piers.kim', mobile: '010-7325-1979'},
    {id: 5, name: '김준영', title: '과장', department: 'BPS', task: 'KAM', extension: '5744', email: 'patrick.kim@sartorius.co.kr', ename: 'patrick.kim', mobile: '010-6871-0309'},
    {id: 6, name: '차준영', title: '대리', department: 'BPS', task: 'KAM', extension: '5760', email: 'jaclyn.cha@sartorius.co.kr', ename: 'jaclyn.cha', mobile: '010-2470-6239'},
    {id: 7, name: '임동섭', title: '대리', department: 'BPS', task: 'KAM', extension: '5775', email: 'dustin.lim@sartorius.co.kr', ename: 'dustin.lim', mobile: '010-2993-4668'},
    {id: 8, name: '방창현', title: '대리', department: 'BPS', task: 'KAM', extension: '5762', email: 'casper.bang@sartorius.co.kr', ename: 'casper.bang', mobile: '010-9232-6838'}

];

let lrs = [
    {id: 1, name: '박성원', title: '부장', department: 'LPS', task: 'LRS', extension: '5720', email: 'leo.park@sartorius.co.kr', ename: 'leo.park', mobile: '010-8996-5376'},
    {id: 2, name: '이준우', title: '차장', department: 'LPS', task: 'LRS', extension: '5725', email: 'eden.lee@sartorius.co.kr', ename: 'eden.lee', mobile: '010-6291-7765'},
    {id: 3, name: '권기원', title: '과장', department: 'LPS', task: 'LRS', extension: '5769', email: 'owen.kwon@sartorius.co.kr', ename: 'owen.kwon', mobile: '010-4811-1993'},
    {id: 4, name: '장요한', title: '과장', department: 'LPS', task: 'LRS', extension: '5795', email: 'hans.jang@sartorius.co.kr', ename: 'hans.jang', mobile: '010-4156-3783'},
    {id: 5, name: '임선영', title: '대리', department: 'LPS', task: 'LRS', extension: '5785', email: 'chloe.lim@sartorius.co.kr', ename: 'chloe.lim', mobile: '010-6661-5287'},
    {id: 6, name: '박대연', title: '대리', department: 'LPS', task: 'LRS', extension: '5791', email: 'felix.park@sartorius.co.kr', ename: 'felix.park', mobile: '010-4082-8013'},
    {id: 7, name: '박예슬', title: '대리', department: 'LPS', task: 'LRS', extension: '5776', email: 'hailey.park@sartorius.co.kr', ename: 'hailey.park', mobile: '010-6546-5782'},
    {id: 8, name: '최민석', title: '대리', department: 'LPS', task: 'LRS', extension: '5780', email: 'dwayne.choi@sartorius.co.kr', ename: 'dwayne.choi', mobile: '010-5616-7025'},
    {id: 9, name: '주이선', title: '사원', department: 'LPS', task: 'LRS', extension: '5707', email: 'esther.ju@sartorius.co.kr', ename: 'esther.ju', mobile: '010-2923-5021'}

];

let kamList = kam;
let bpsKam = document.getElementById('bps_kam');

kamList.forEach (item => {


    let newKam = document.createElement('div');
    newKam.classList.add('kam');

    let newName = document.createElement('div');
    newName.classList.add('name');
    newName.innerText = item.name;
    newKam.appendChild(newName);

    let newBox01 = document.createElement('div');
    newBox01.classList.add('box');
    newKam.appendChild(newBox01);

    let newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = item.title;
    newBox01.appendChild(newTitle);

    let newDepartment = document.createElement('div');
    newDepartment.classList.add('department');
    newDepartment.innerText = item.department;
    newBox01.appendChild(newDepartment);

    let newEmail = document.createElement('div');
    newEmail.classList.add('email');
    newBox01.appendChild(newEmail);

    //a Tag만들기
    let newAtag01 = document.createElement('a');
    newAtag01.href = 'mailto:' + item.email;
    newAtag01.innerText = item.ename;
    newEmail.appendChild(newAtag01);

    let newBox02 = document.createElement('div');
    newBox02.classList.add('box');
    newKam.appendChild(newBox02);

    let newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerText = item.department;
    newBox02.appendChild(newTask);

    let newMobile = document.createElement('div');
    newMobile.classList.add('mobile');
    newBox02.appendChild(newMobile);

    //a Tag만들기
    let newAtag02 = document.createElement('a');
    newAtag02.href = 'tel:' + item.mobile;
    newAtag02.innerText = item.mobile;
    newMobile.appendChild(newAtag02);

    let newExtension = document.createElement('div');
    newExtension.classList.add('extension');
    newExtension.innerText = item.extension;
    newBox02.appendChild(newExtension);

    bpsKam.appendChild(newKam);

})


let lrsList = lrs;
let lpsLrs = document.getElementById('lps_lps');

lrsList.forEach (item => {


    let newLrs = document.createElement('div');
    newLrs.classList.add('lrs');

    let newName = document.createElement('div');
    newName.classList.add('name');
    newName.innerText = item.name;
    newLrs.appendChild(newName);

    let newBox01 = document.createElement('div');
    newBox01.classList.add('box');
    newLrs.appendChild(newBox01);

    let newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = item.title;
    newBox01.appendChild(newTitle);

    let newDepartment = document.createElement('div');
    newDepartment.classList.add('department');
    newDepartment.innerText = item.department;
    newBox01.appendChild(newDepartment);

    let newEmail = document.createElement('div');
    newEmail.classList.add('email');
    newBox01.appendChild(newEmail);

    //a Tag만들기
    let newAtag01 = document.createElement('a');
    newAtag01.href = 'mailto:' + item.email;
    newAtag01.innerText = item.ename;
    newEmail.appendChild(newAtag01);

    let newBox02 = document.createElement('div');
    newBox02.classList.add('box');
    newLrs.appendChild(newBox02);

    let newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerText = item.department;
    newBox02.appendChild(newTask);

    let newMobile = document.createElement('div');
    newMobile.classList.add('mobile');
    newBox02.appendChild(newMobile);

    //a Tag만들기
    let newAtag02 = document.createElement('a');
    newAtag02.href = 'tel:' + item.mobile;
    newAtag02.innerText = item.mobile;
    newMobile.appendChild(newAtag02);

    let newExtension = document.createElement('div');
    newExtension.classList.add('extension');
    newExtension.innerText = item.extension;
    newBox02.appendChild(newExtension);

    lpsLrs.appendChild(newLrs);

})