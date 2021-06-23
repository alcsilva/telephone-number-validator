function telephoneCheck(str) {
    const tel1 = /^\d{3}-\d{3}-\d{4}$/g; //555-555-5555
    const tel2 = /^\(\d{3}\)\d{3}-\d{4}$/g; //(555)555-5555
    const tel3 = /^\(\d{3}\) \d{3}-\d{4}$/g; //(555) 555-5555
    const tel4 = /^\d{3} \d{3} \d{4}$/g; //555 555 5555
    const tel5 = /^\d{10}$/g; //5555555555
    const tel6 = /^1 ?[- ]?\d{3}[- ]? ?\d{3}[- ]?\d{4}$/g; //1 555 555 5555
    const tel7 = /^1 ?\(\d{3}\) ?\d{3}[- ]?\d{4}$/g; //1 555 555 5555
    if (tel1.test(str) || tel2.test(str) || tel3.test(str) || tel4.test(str) || tel5.test(str) || tel6.test(str) || tel7.test(str)) {
        return true;
    } else {
        return false;
    }

}

telephoneCheck("555-555-5555");