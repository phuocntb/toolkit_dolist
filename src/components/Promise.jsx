import React, { useEffect } from 'react';

export default function MyComponent() {


    useEffect(() => {
        async function sayHi() {
            let admin = true;

            // const abc = await new Promise((fulfilled, reject) => {
            //     setTimeout(() => {
            //        if(admin) {
            //         fulfilled(true);
            //        }else {
            //         reject(false);
            //        }
            //     }, 1000);
            // })



            // const abc = await new Promise((fulfilled, reject) => {
            //     setTimeout(() => {
            //        if(admin) {
            //         fulfilled(true);
            //        }else {
            //         reject(false);
            //        }
            //     }, 1000);
            // })
            // .then(res => {
            //     console.log("res", res);
            //     return res;
            // })
            // .catch(err => {
            //     console.log("err", err);
            //     return err
            // })

            try {
                const abc = await new Promise((fulfilled, reject) => {
                    setTimeout(() => {
                    if(admin) {
                        fulfilled(true);
                    }else {
                        reject(false);
                    }
                    }, 1000);
                })
                console.log("abc", abc)
            }catch(err) {
                console.log("err", err)
            }

            // console.log("abc", abc);
        }

        sayHi();
    }, []);

    return (
        <div>Promise</div>
    );
}
