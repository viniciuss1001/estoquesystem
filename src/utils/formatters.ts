export function formatCNPJ(value?: string | null): string {
	if (!value) return ""

	const numbers = value.replace(/\D/g, "")

	if (numbers.length !== 14) return value

	return numbers.replace(
		/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
		"$1.$2.$3/$4-$5"
	)

}

export function formatPhone(value?: string | null): string {
	if(!value) return ""

	const numbers = value.replace(/\D/g, "")

	if (numbers.length === 11) {
    return numbers.replace(
      /^(\d{2})(\d{5})(\d{4})$/,
      "($1) $2-$3"
    );
  }

  if (numbers.length === 10) {
    return numbers.replace(
      /^(\d{2})(\d{4})(\d{4})$/,
      "($1) $2-$3"
    );
  }
  
  return value
}