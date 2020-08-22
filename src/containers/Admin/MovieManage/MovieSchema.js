import React from 'react';
import * as yup from 'yup';
import { TextTranslation } from '../../Language/TextTranslation';

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
});

export const ShowTimeSchema = yup.object().shape({
  thoiLuong: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.DuartionSchema" />,
    ),
  giaVe: yup
    .string()
    .required(
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.TicketPriceSchema" />,
    ),
});
