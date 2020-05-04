const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

const formatDate = new Intl.DateTimeFormat('pt-BR', options);

export default formatDate;
