export function formatDate(dateString) {
	const date = new Date(dateString);
	const today = new Date();
	const yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);

	const formatShort = d =>
		d.getFullYear() +
		'-' +
		(d.getMonth() + 1).toString().padStart(2, '0') +
		'-' +
		d.getDate().toString().padStart(2, '0');

	const inputDate = formatShort(date);
	const todayStr = formatShort(today);
	const yesterdayStr = formatShort(yesterday);

	if (inputDate === todayStr) return 'Today';
	if (inputDate === yesterdayStr) return 'Yesterday';

	return date.toLocaleDateString('tr-TR');
}
