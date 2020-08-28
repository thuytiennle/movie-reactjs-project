import React from 'react';
import * as yup from 'yup';
import { TextTranslation } from '../../Language/TextTranslation';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const MovieSchema = yup.object().shape({
  tenPhim: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.MovieForm.NameSchema" />,
    ),
  biDanh: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.MovieForm.CodenameSchema" />,
    ),
  trailer: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.MovieForm.TrailerSchema" />,
    ),
  moTa: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.MovieForm.DescriptionSchema" />,
    ),
  hinhAnh: yup
    .mixed()
    .required(
      <TextTranslation id="container.Admin.MovieManage.MovieForm.ImageSchema" />,
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      (value) => value && SUPPORTED_FORMATS.includes(value.type),
    ),
});

export const ShowTimeSchema = yup.object().shape({
  maRap: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.CinemaSchema" />,
    ),
  thoiLuong: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.DurationSchema" />,
    ),
  giaVe: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.TicketPriceSchema" />,
    ),
});
