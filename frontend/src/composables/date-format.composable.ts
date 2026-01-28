export function useDateFormat() {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('de-DE')
    }

    const formatDateTime = (dateString: string) => {
        return new Date(dateString).toLocaleString('de-DE')
    }

    return {
        formatDate,
        formatDateTime
    }
}
