import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
      resumo: Yup.string()
        .required()
        .test(
          'O resumo só pode conter 500 caracteres',
          resumo => resumo.length <= 500
        ),
      isbn: Yup.string().required(),
      paginas: Yup.string()
        .required()
        .min(100),
      preco: Yup.number()
        .required()
        .min(20),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validação falhou.', messages: error.inner });
  }
};
