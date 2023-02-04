# Cümle yapısı (Sözcüksel analiz)

    Sözcüksel analiz

<https://tr.wikipedia.org/wiki/S%C3%B6zc%C3%BCksel_analiz>

<https://docs.python.org/3/reference/lexical_analysis.html>

## Satır yapısı

* Mantıksal satırlar
* Fiziksel satırlar

## Yorumlar

```python

""" Eğer yorum olarak 
 uzun bir blok ayırmak 
 istiyorsak
 """

# Yada eğer sadece bir satırlık yorum istiyorsak

# Yada başka bir çok satırlı
# Yorum alanı örneği

print("Lazer!")

```

## Açık satır birleştirme

```python{2,3}
def yil_mi(yil,ay,gun,saat,dakika,saniye):
    if 1900 < yil < 2100 and 1 <= ay <= 12 \
    and 1 <= gun <= 31 and 0 <= saat < 24 \
    and 0 <= dakika < 60 and 0 <= saniye < 60:   # geçerli bir tarih gibi görünüyor
        return 1
yil_mi(1950,5,30,4,5,33)
```

## Örtük çizgi birleştirme

```python
month_names = ['Januari', 'Februari', 'Maart',      # Almanca aylar
               'April',   'Mei',      'Juni',       # parantez içindeki 
               'Juli',    'Augustus', 'September',  # herşey zaten tek bir 
               'Oktober', 'November', 'December']   # mantıksal satır sayılır
```

## Boş satırlar
