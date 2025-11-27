import { View, Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { styles } from "./styles";
import { calendarTheme } from "../../../theme/calendarTheme";
import { useState } from "react";

LocaleConfig.locales['pt'] = {
    monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ],
    dayNames: [
        'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
};
LocaleConfig.defaultLocale = 'pt';

type MiniCalendarioProps = {
    onSelectDay: (dateString: string) => void;
};

export default function MiniCalendario({ onSelectDay }: MiniCalendarioProps) {

    const hoje = new Date().toISOString().split("T")[0];
    const [diaMarcado, setDiaMarcado] = useState<string>(hoje);
    
    return (
        <View style={styles.contener_calendario}>
            <View style={styles.minCalendario}>
                <Text style={styles.titulCalendario}>Calendário</Text>

                 <Calendar
                    current={hoje}
                    hideExtraDays={false}
                    enableSwipeMonths={true}
                    theme={calendarTheme}
                    markedDates={{
                        [diaMarcado]: {
                            selected: true,
                            selectedColor: "#2467a5",
                            selectedTextColor: "#fff",
                        }
                    }}
                    onDayPress={(day) => {
                        setDiaMarcado(day.dateString);
                        onSelectDay(day.dateString);
                    }}
                />
            </View>
        </View>
    );
}
