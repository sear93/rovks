import React, {useContext} from 'react';
import axios from "axios";
import GlobalContext from "../store/global-context";
import {delay} from "../helpers/utils";
import {useForm} from "react-hook-form";
import {FormWrapper} from "../styled/form";

const Form = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const ctx = useContext(GlobalContext);

    const onSubmitHandler = async (data) => {

        await ctx.showNotification({
            message: "Pending",
            status: "pending"
        })

        await delay(() => {
            axios.post(`https://rovks-51bd7-default-rtdb.europe-west1.firebasedatabase.app/`, data, {
                withCredentials: true
            })
                .then(() => {
                    ctx.showNotification({
                        message: "Success",
                        status: "success"
                    })
                    reset();
                })
                .catch(err => ctx.showNotification({
                    message: err.message,
                    status: "error"
                }))

        }, 1000)
    };

    let maxLength = (length) => {
        return <p className={"error"}
                  data-aos="fade-in"
                  data-aos-duration="2000">First name cannot exceed {length} characters</p>
    }

    let required = () => {
        return <p className={"error"}
                  data-aos="fade-in"
                  data-aos-duration="2000">This field is required</p>
    }

    return (
        <FormWrapper onSubmit={e => console.log(e)}>
            <div className="inputs">
                <div className="inputs-col">
                    <input placeholder={"Name*"}
                           className={errors?.name && 'error'}
                           {...register("name", {
                               required: true,
                               maxLength: 20,
                               pattern: /^[a-zA-Z].*[\s\.]*$/g
                           })}
                    />
                    <div className="errors">
                        {errors?.name?.type === "required" && required()}
                        {errors?.name?.type === "maxLength" && maxLength(20)}
                        {errors?.name?.type === "pattern" && (
                            <p className={"error"}>Alphabetical characters only</p>)}
                    </div>

                    <input placeholder={"Email*"}
                           className={errors?.email && 'error'}
                           {...register("email",
                               {
                                   pattern: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                                   required: true,
                               })}
                    />
                    <div className="errors">
                        {errors?.email?.type === "pattern" && (<p className={"error"}>Email is incorrect</p>)}
                        {errors?.email?.type === "required" && required()}
                    </div>
                </div>
                <div className="inputs-col">
                    <input placeholder={"Phone*"}
                           className={errors?.phone && 'error'}
                           {...register("phone",
                               {
                                   required: true,
                                   pattern: /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g,
                               })}
                    />
                    <div className="errors">
                        {errors?.phone?.type === "required" && required()}
                        {errors?.phone?.type === "pattern" && (
                            <p className={"error"}>Phone number is incorrect</p>)}
                    </div>

                    <input placeholder={"Subject*"}
                           className={errors?.subject && 'error'}
                           {...register("subject",
                               {
                                   required: true
                               })}
                    />
                    <div className="errors">
                        {errors?.subject?.type === "required" && required()}
                    </div>
                </div>
            </div>
            <textarea placeholder={"Message"}
                      {...register("message",
                          {
                              required: false
                          })}
            />
            <input onClick={handleSubmit(onSubmitHandler)} type="submit" className="button"/>
        </FormWrapper>
    );
};

export default Form;
