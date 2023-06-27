import React from "react";
import "./healthDeclaration.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import 'bootstrap/dist/css/bootstrap.min.css';
import {object} from "yup";
import {Vortex} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'
import {toast} from "react-toastify";

export function HealthDeclaration() {
    return (

        <>
            <Formik initialValues={{
                name: '',
                cmnd: '',
                year: '',
                sex: '',
                country: '',
                company: '',
                position: '',
                bhyt: '',
                city: '',
                district: '',
                ward: '',
                address: '',
                phone: '',
                email: '',
                touching: '',
                symptom: [],
                contact: []
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required(),
                        cmnd: Yup.string().required(),

                        year: Yup.number().required().min(1900, "Bạn không được nhỏ hơn 1900"),
                        country: Yup.string().required(),

                        city: Yup.string().required(),
                        district: Yup.string().required(),
                        ward: Yup.string().required(),
                        address: Yup.string().required(),
                        phone: Yup.number().required(),
                        email: Yup.string().required().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "mail không đúng định dạng"),


                    })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            toast(` ${values.name} đã khai báo y tế`)
                            setSubmitting(false)
                            console.log(values)

                        }, 1000)
                    }}>


                {

                    ({isSubmitting}) => (
                        <div className="container ">


                            <div style={{textAlign: "center"}}>
                                <h1>Tờ Khai y tế</h1>
                            </div>
                            <Form>
                                <div className="mb-3"><label className="form-label">Họ Tên</label>
                                    <Field type="text" className="form-control" name='name'/>
                                    <ErrorMessage name="name" component='span' className='error'/>
                                </div>
                                <div className="mb-3"><label>Số hộ chiếu/CMND</label>
                                    <Field type="text" className="form-control" name='cmnd'/>
                                    <ErrorMessage name="cmnd" component='span' className='error'/>
                                </div>
                                <div className="mb-3"><label>Năm Sinh</label>
                                    <Field type="text" className="form-control" name='year'/>
                                    <ErrorMessage name="year" component='span' className='error'/>

                                </div>
                                <div className="mb-3">
                                    <div className="form-group">
                                        <label>Gender :</label>
                                        <label id="id-label">Nam </label>
                                        <Field

                                            type="radio"
                                            name="sex"
                                            value='1'

                                        />


                                        <label id="id-label">Nữ </label>
                                        <Field

                                            type="radio"
                                            name="sex"
                                            value='0'

                                        />
                                    </div>
                                </div>
                                <div className="mb-3"><label>Quốc Tịch</label>
                                    <Field type="text" className="form-control" name='country'/>
                                    <ErrorMessage name="country" component='span' className='error'/>
                                </div>
                                <div className="mb-3"><label>Công ty làm việc</label>
                                    <Field type="text" className="form-control" name='company'/>
                                </div>
                                <div className="mb-3"><label>Bộ phận làm việc</label>
                                    <Field type="text" className="form-control" name='position'/>
                                </div>
                                <div>
                                    <p>Có thẻ bảo hiểm y tế <input type='checkbox' name='bhyt'/></p>
                                </div>

                                <h1>Địa chỉ liên lạc tại Việt Nam</h1>

                                <div className="mb-3"><label>Tỉnh thành</label>
                                    <Field type="text" className="form-control" name='city'/>
                                    <ErrorMessage name="city" component='span' className='error'/>
                                </div>
                                <div className="mb-3"><label>Quận/huyện</label>
                                    <Field type="text" className="form-control" name='district'/>
                                    <ErrorMessage name="district" component='span' className='error'/>
                                </div>
                                <div className="mb-3"><label>Phường/xã</label>
                                    <Field type="text" className="form-control" name='ward'/>
                                    <ErrorMessage name="ward" component='span' className='error'/>
                                </div>
                                <div className="mb-3"><label>Số nhà,phố,tổ dân phố/thôn/đội</label>
                                    <Field type="text" className="form-control" name='address'/>
                                    <ErrorMessage name="address" component='span' className='error'/>

                                </div>
                                <div className="mb-3"><label>Điện thoại</label>
                                    <Field type="text" className="form-control" name='phone'/>
                                    <ErrorMessage name="phone" component='span' className='error'/>

                                </div>
                                <div className="mb-3"><label>Email</label>
                                    <Field type="email" className="form-control" name='email'/>
                                    <ErrorMessage name="email" component='span' className='error'/>

                                </div>


                                <div className="mb-3">
                                    <h3>Trong vòng 14 ngày qua Anh/chị có đến quốc gia vùng lãnh thỗ nào(có thể đi qua
                                        nhiều quốc
                                        gia)</h3>
                                    <Field type="text" className="form-control" as="textarea"
                                           name="touching"
                                    />
                                </div>


                                <h3>Trong vòng 14 ngày qua Anh/chị có xuất hiện triệu chứng nào sau đây không?</h3>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="sốt"
                                           name="symptom"
                                    />
                                    <label className="form-check">sốt</label>
                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="ho"
                                           name="symptom"
                                    />
                                    <label className="form-check">Ho</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Khó thở"
                                           name="symptom"
                                    />
                                    <label className="form-check">Khó thở</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Viêm phổi"
                                           name="symptom"
                                    />
                                    <label className="form-check">Viêm phổi</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Đau họng"
                                           name="symptom"
                                    />
                                    <label className="form-check">Đau họng </label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Mệt mỏi"
                                           name="symptom"
                                    />
                                    <label className="form-check">Mệt mỏi</label>

                                </div>

                                <h3>Trong vòng 14 ngày qua Anh/chị có tiếp xúc với?</h3>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"
                                           name="contact"
                                    />
                                    <label className="form-check">Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người từ nước có bệnh COVID-19"
                                           name="contact"
                                    />
                                    <label className="form-check">Người từ nước có bệnh COVID-19</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người có biểu hiện (số, ho, khó thở, viêm phổi)"
                                           name="contact"
                                    />
                                    <label className="form-check">Người có biểu hiện (số, ho, khó thở, viêm
                                        phổi)</label>

                                    {
                                        isSubmitting ?
                                            <Vortex
                                                visible={true}
                                                height="80"
                                                width="80"
                                                ariaLabel="vortex-loading"
                                                wrapperStyle={{}}
                                                wrapperClass="vortex-wrapper"
                                                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                            />
                                            :
                                            <div className="btn-create">
                                                <button type="submit" className=" btn btn-success">
                                                    <b>Create</b>
                                                </button>
                                            </div>
                                    }

                                </div>

                            </Form>
                        </div>
                    )


                }
            </Formik>
        </>
    )


}