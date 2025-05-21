export const formatCPF = (value: string): string => {
  const numericValue = value.replace(/\D/g, "").slice(0, 11);

  return numericValue
    .replace(/(\d{3})(\d)/, "$1.$2") 
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
};

export const formatPhone = (value: string): string => {
  const numericValue = value.replace(/\D/g, "").slice(0, 11);

  return numericValue
    .replace(/(\d{2})(\d)/, "$1 $2")
    .replace(/(\d{5})(\d)/, "$1$2");
};

export const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const formatDate = (date: Date): string => {
  const formattedDate = date ? new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }) : null;

  return formattedDate || '';
}